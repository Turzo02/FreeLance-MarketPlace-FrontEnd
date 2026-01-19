import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Eye, EyeOff, User, Mail, Image as ImageIcon, Lock, ArrowRight, Loader2, CheckCircle } from "lucide-react";
import { AuthContext } from "../../Context/AuthContext";
import { updateProfile } from "firebase/auth";
import toast from 'react-hot-toast';
import axios from "axios";

const Register = () => {
  const { googleSignIn, createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    const password = form.password.value;

    // Validation
    const patterns = {
      length: /^.{6,}$/,
      upperLower: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
    };

    if (!patterns.length.test(password)) {
      toast.error("Password must be at least 6 characters.");
      setLoading(false);
      return;
    }
    if (!patterns.upperLower.test(password)) {
      toast.error("Password must contain uppercase & lowercase letters.");
      setLoading(false);
      return;
    }

    try {
      // 1. Create User in Firebase
      const result = await createUser(email, password);
      const newUser = result.user;

      // 2. Update Profile
      await updateProfile(newUser, {
        displayName: name,
        photoURL: photoUrl,
      });

      // 3. Save to MongoDB
      const savedUser = { name, email, photoUrl };
      await axios.post("https://freelance-marketplace-api-server-smoky.vercel.app/users", savedUser);

      // 4. Success
      toast.success("Account created! Redirecting...", { duration: 3000 });
      setTimeout(() => {
        navigate(from, { replace: true });
      }, 1500);

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const result = await googleSignIn();
      const user = result.user;

      const newUser = {
        name: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
      };
      
      await axios.post("https://freelance-marketplace-api-server-smoky.vercel.app/users", newUser);
      
      toast.success(`Welcome, ${user.displayName}!`);
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto grid lg:grid-cols-2 bg-background text-foreground transition-colors duration-300">
      <title>Register | Freelance Marketplace</title>

      {/* --- LEFT SIDE: Form --- */}
      <div className="flex flex-col justify-center items-center p-8 sm:p-12 lg:p-24 bg-background relative order-2 lg:order-1">
        
        {/* Decorative Blob */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="w-full max-w-md space-y-8 relative z-10">
          
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Create an account
            </h1>
            <p className="text-muted-foreground">
              Join thousands of freelancers and clients today
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleRegister} className="space-y-5">
            
            {/* Name Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none" htmlFor="name">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-muted-foreground">
                  <User size={18} />
                </div>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="flex h-12 w-full rounded-xl border border-input bg-card px-10 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0 transition-all shadow-sm"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none" htmlFor="email">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-muted-foreground">
                  <Mail size={18} />
                </div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  className="flex h-12 w-full rounded-xl border border-input bg-card px-10 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0 transition-all shadow-sm"
                  required
                />
              </div>
            </div>

            {/* Photo URL Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none" htmlFor="photoUrl">Photo URL</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-muted-foreground">
                  <ImageIcon size={18} />
                </div>
                <input
                  id="photoUrl"
                  type="url"
                  name="photoUrl"
                  placeholder="https://example.com/avatar.jpg"
                  className="flex h-12 w-full rounded-xl border border-input bg-card px-10 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0 transition-all shadow-sm"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none" htmlFor="password">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-muted-foreground">
                  <Lock size={18} />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a strong password"
                  className="flex h-12 w-full rounded-xl border border-input bg-card px-10 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0 transition-all shadow-sm pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed mt-4"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Creating Account...
                </>
              ) : (
                <>
                  Create Account <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          {/* Google Button */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full h-12 inline-flex items-center justify-center rounded-xl border border-input bg-card text-foreground font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors disabled:opacity-50"
          >
            <svg className="mr-2 h-5 w-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
              <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
            </svg>
            Google
          </button>

          {/* Footer Link */}
          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-primary hover:underline underline-offset-4">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* --- RIGHT SIDE: Visual (Hidden on Mobile) --- */}
      <div className="hidden lg:flex relative flex-col justify-between p-12 bg-muted text-white overflow-hidden order-1 lg:order-2">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
            alt="Team" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/50 mix-blend-multiply" />
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/90" />
        </div>

        {/* Top Content */}
        <div className="relative z-10 flex justify-end">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <CheckCircle size={16} className="text-green-400" />
            <span className="text-sm font-medium">Verified Community</span>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="relative z-10 max-w-lg">
          <h2 className="text-4xl font-bold tracking-tight mb-4 leading-tight">
            Start your journey with us.
          </h2>
          <p className="text-lg opacity-90 leading-relaxed">
            "I found my first major client within 2 days of signing up. The verification process makes everything so much safer."
          </p>
          <div className="mt-6 flex items-center gap-3">
             <div className="h-1 w-12 bg-primary rounded-full" />
             <span className="text-sm font-semibold">Join 12,000+ users</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Register;
