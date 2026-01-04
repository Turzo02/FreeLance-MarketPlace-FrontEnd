import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";
import axios from "axios";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const { googleSignIn, signInUser } = use(AuthContext);
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const HandleDemoLogin = () =>{
    setEmail("demo.freelanceruser@gmail.com")
    setPassword("demoPass1@")
  }

  const location = useLocation();
  let from = location.state || "/";

  if (from.includes("undefined")) {
    from = "/";
  }

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        // console.log(user);

        //create user in database
        const newUser = {
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        };

        axios
          .post(
            "https://freelance-marketplace-api-server-smoky.vercel.app/users",
            newUser
          )
          .then((res) => {
            // console.log("User saved to database:", res.data);
          })
          .catch((error) => {
            console.error("Error saving user:", error);
          });

        Swal.fire({
          title: "Success",
          text: "Logged in successfully ! Redirecting...",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          navigate(`${from}`);
        });
      })
      .catch((error) => {
        setError(error.message);
        Swal.fire({
          title: "Error",
          text: error.message,
          icon: "error",
        });
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        // console.log(result.user);
        setSuccess(true);
        e.target.reset();

        Swal.fire({
          title: "Success",
          text: "Logged in successfully !",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          navigate(`${from}`);
        });
      })
      .catch((error) => {
        setError(error.message);
        Swal.fire({
          title: "Error",
          text: error.message,
          icon: "error",
        });
      });
  };


  return (
    <div>
      {/* Login page and Functionlaity Added */}
      <div className="hero bg-base-200 min-h-screen">
            <title>Login</title>
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left mb-5">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                
              <form onSubmit={handleLogin}>
                <fieldset className="fieldset">
                  <button onClick={HandleDemoLogin}
                   type="button"
                    className="btn   border-none">
                                   Use Demo Credential
                                  </button>
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />

                  {/* password */}
                  <div className="relative w-full">
                    <label className="label">Password</label>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className="input"
                      placeholder="Enter your password"
                      required
                      value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    {/* Eye icon */}
                    <button
                      type="button"
                      className="absolute top-[50%] right-3  cursor-pointer text-blue-100 z-40"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <FaEyeSlash  className="text-indigo-500" size={20} />
                      ) : (
                        <FaEye className="text-indigo-500"  size={20} />
                      )}
                    </button>
                  </div>
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
              </form>

              <button
                onClick={handleGoogleSignIn}
                className="btn bg-white text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Sign in With Google
              </button>
              <p className="text-center text-gray-600 ">
                Didn't have an account?{" "}
                <Link
                  className="link link-hover font-medium text-green-400 "
                  to="/register"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
