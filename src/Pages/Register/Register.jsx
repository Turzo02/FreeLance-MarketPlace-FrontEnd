import React, { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { googleSignIn, createUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    setError("");
    setSuccess(false);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoUrl = e.target.photoUrl.value;
    const password = e.target.password.value;
    console.log(name, email, photoUrl, password);

    //password validation
    const patterns = {
      length: /^.{6,}$/, // at least 6 characters
      upperLower: /^(?=.*[a-z])(?=.*[A-Z]).+$/, // contains uppercase & lowercase
    };

    if (!patterns.length.test(password)) {
      setError("Password must be at least 6 characters long");
      return;
    }
    if (!patterns.upperLower.test(password)) {
      setError(
        "Password Must include at least one uppercase letter and one lowercase letter"
      );
      return;
    }
    createUser(email, password)
      .then(async (result) => {
        const newUser = result.user;
        await updateProfile(newUser, {
          displayName: name,
          photoURL: photoUrl,
        });

        //add user to database
        const savedUser = {
          name: name,
          email: email,
          photoUrl: photoUrl,
        };

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(savedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(" data after user Saved to mongoDB", data);
          })
          .catch((error) => {
            console.log(error);
          });

        Swal.fire(
          "Success",
          "Account created successfully! You will be redirected to home page",
          "success"
        );
        setTimeout(() => {
          navigate("/");
        }, 2000);
        setSuccess(true);
      })
      .catch((error) => {
        Swal.fire("Error", error.message, "error");
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);

        //create user in database
        const newUser = {
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        };

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(" data after user Saved to mongoDB", data);
          });

        Swal.fire({
          title: "Success",
          text: "Logged in successfully! Redirecting to home page",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/");
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
      {/* Register page and Functionlaity Added */}
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left mb-5">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="name"
                    className="input"
                    placeholder="Your Name"
                    required
                    name="name"
                  />

                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    required
                    name="email"
                  />

                  <label className="label">Photo URL</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Photo URL"
                    required
                    name="photoUrl"
                  />

                  {/* Password */}
                  <div className="relative w-full">
                    <label className="label">Password</label>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className="input"
                      placeholder="Enter your password"
                      required
                    />
                    {/* Eye icon */}
                    <button
                      type="button"
                      className="absolute top-[50%] right-[6%]  cursor-pointer text-blue-100 z-40"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <FaEyeSlash size={20} />
                      ) : (
                        <FaEye size={20} />
                      )}
                    </button>
                  </div>

                  <button className="btn btn-neutral mt-4">Register</button>
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
                Sign Up With Google
              </button>
              <p className="text-center text-gray-600 py-2">
                Already have an account?{" "}
                <Link
                  className="link link-hover text-blue-400 font-semibold "
                  to="/login"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
