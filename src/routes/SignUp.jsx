import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility


  const { signUp } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      console.log("User signed up");
      navigate("/");
    } catch (e) {
      setError(e.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const getPasswordStrength = (password) => {
    const strength = {
      0: { label: "Weak", color: "text-red-500" },
      1: { label: "Medium", color: "text-yellow-500" },
      2: { label: "Strong", color: "text-green-500" },
    };

    let score = 0;

    // checks if password contains Lowercase or Uppercase letter, symbol, number
    if (/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9])/.test(password)) {
      score++;
    }

    if (password.length >= 8) {
      score++;
    }

    return strength[score];
  };

  const passwordStrength = getPasswordStrength(password);



  return (
    <div>
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
        <h1 className="text-2xl font-bold">Sign Up</h1>
        {error ? <p className="bg-red-400 p-3 my-2">{error}</p> : null}
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <label htmlFor="email">Email</label>
            <div className="my-2 w-full relative rounded-md shadow-xl">
              <input                
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 bg-primary border border-input rounded-lg"
                type="email"
              />
              <AiOutlineMail className="absolute right-2 top-3 text-gray-500" />
            </div>
          </div>
          <div className="my-4">
            <label htmlFor="password">Password</label>
            <div className="my-2 w-full relative rounded-md shadow-xl">
              <input
               type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 bg-primary border border-input rounded-lg"             
              />
               <button
                type="button"
                className="absolute right-3 top-2 text-gray-500"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {password && (
              <p className="text-sm mt-2 font-bold">
                Password Strength:{" "}
                <span className={passwordStrength.color}>
                  {passwordStrength.label}
                </span>
              </p>
            )}
          </div>
          <button className="w-full my-2 p-3 bg-button text-btnText rounded-md shadow-xl font-semibold">
            Sign Up
          </button>
        </form>
        <p className="my-2">
          Already have an account?{" "}
          <Link to="/signin" className="text-accent font-medium">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
