import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Eye, EyeOff, LogIn, Mail, Lock, ArrowRight, Loader2 } from "lucide-react";
import { AuthContext } from "../../Context/AuthContext";
import toast from 'react-hot-toast';
import axios from "axios";
import Logo from "../../Components/Logo/Logo"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const { googleSignIn, signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const from = location.state?.from?.pathname || "/";

  const HandleDemoLogin = () => {
    setEmail("demo.freelanceruser@gmail.com");
    setPassword("demoPass1@");
    toast.success("Demo credentials applied!", { icon: "🚀" });
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const result = await googleSignIn();
      const user = result.user;

      // Save user to DB
      const newUser = {
        name: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
      };
      
      await axios.post("https://freelance-marketplace-api-server-smoky.vercel.app/users", newUser);
      
      toast.success(`Welcome back, ${user.displayName}!`);
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await signInUser(email, password);
      toast.success("Logged in successfully!");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto grid lg:grid-cols-2 bg-background text-foreground transition-colors duration-300">
      <title>Login | Freelance Marketplace</title>

      {/* --- LEFT SIDE: Visual & Testimonial (Hidden on Mobile) --- */}
      <div className="hidden lg:flex relative flex-col justify-between p-12 bg-muted text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070&auto=format&fit=crop" 
            alt="Workspace" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        {/* Content over image */}
        <div className="relative z-10">
          <Link to="/" className="text-3xl font-bold tracking-tight">Freelance MarketPlace</Link>
      
        </div>

        <div className="relative z-10 max-w-md">
          <blockquote className="space-y-6 p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
            <p className="text-lg font-medium leading-relaxed">
              "This platform completely transformed how I manage my freelance career. The workflow is seamless and the clients are top-tier."
            </p>
            <footer className="flex items-center gap-4">
              <img 
                src="https://api.dicebear.com/7.x/notionists/svg?seed=Rohan" 
                alt="Avatar" 
                className="w-12 h-12 rounded-full border-2 border-white/50" 
              />
              <div>
                <div className="font-bold">Alex Chen</div>
                <div className="text-sm opacity-80">Senior Full Stack Developer</div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>

      {/* --- RIGHT SIDE: Login Form --- */}
      <div className="flex flex-col justify-center items-center p-8 sm:p-12 lg:p-24 bg-background relative">
        
        {/* Decorative Blob */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="w-full max-w-md space-y-8 relative z-10">
          
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Welcome back
            </h1>
            <p className="text-muted-foreground">
              Enter your credentials to access your account
            </p>
          </div>

          {/* Demo Login Pill */}
          <div className="flex justify-center">
             <button 
                type="button"
                onClick={HandleDemoLogin}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-xs font-semibold text-primary hover:bg-primary/10 transition-colors cursor-pointer border border-primary/20"
             >
                <span>🚀 Try Demo Account</span>
             </button>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-muted-foreground">
                  <Mail size={18} />
                </div>
                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  className="flex h-12 w-full rounded-xl border border-input bg-card px-10 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 transition-all shadow-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium leading-none" htmlFor="password">
                  Password
                </label>
                <div
               
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Forgot password?
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-muted-foreground">
                  <Lock size={18} />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="flex h-12 w-full rounded-xl border border-input bg-card px-10 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 transition-all shadow-sm pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign In <ArrowRight className="ml-2 h-4 w-4" />
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
            Don't have an account?{" "}
            <Link to="/register" className="font-semibold text-primary hover:underline underline-offset-4">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
