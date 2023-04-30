import React from "react";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <div>
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
        <h1 className="text-2xl font-bold">Sign In</h1>
        <form>
          <div className="my-4">
            <label htmlFor="email">Email</label>
            <div className="my-2 w-full relative rounded-md shadow-xl">
              <input
                className="w-full p-2 bg-primary border border-input rounded-lg"
                type="email"
              />
              <AiOutlineMail className="absolute right-2 top-3 text-gray-500"/>
            </div>
          </div>
          <div className="my-4">
            <label htmlFor="password">Password</label>
            <div className="my-2 w-full relative rounded-md shadow-xl">
              <input
                className="w-full p-2 bg-primary border border-input rounded-lg"
                type="password"
              />
              <AiFillLock className="absolute right-2 top-3 text-gray-500"/>
            </div>
          </div>
          <button className="w-full my-2 p-3 bg-button text-btnText rounded-md shadow-xl font-semibold">Sign in</button>
        </form>
        <p className="my-2">
          Don't have an account? <Link to="/signup" className="text-accent font-medium">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
