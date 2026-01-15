import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../../assets/netflix_bg_image.PNG";
import Navbar from "src/components/Navbar/Navbar";
import SignupFooter from "../../components/Footer/SignupFooter";

const Signup = () => {
  return (
    <>
    {}
    <div
      className="relative min-h-screen text-white overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Navbar (NO sign-in button here) */}
      <Navbar showSignIn={false} />

      {/* Content */}
      <div className="relative z-10 flex justify-center items-center min-h-screen px-4 pt-24">
        <div className="w-full max-w-md bg-black/80 p-8 rounded-md">

          <h1 className="text-3xl font-bold mb-6">Sign In</h1>

          <input
            type="text"
            placeholder="Email or mobile number"
            className="w-full mb-4 px-4 py-3 bg-gray-800 border border-gray-600 rounded"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 px-4 py-3 bg-gray-800 border border-gray-600 rounded"
          />

          <button className="w-full bg-red-600 hover:bg-red-700 py-3 rounded font-semibold mb-4">
            Sign In
          </button>

          <div className="text-center text-gray-400 mb-4">OR</div>

          <button className="w-full bg-gray-700 hover:bg-gray-600 py-3 rounded mb-4">
            Use a Sign-In Code
          </button>

          <p className="text-center text-sm hover:underline mb-4 cursor-pointer">
            Forgot password?
          </p>

          <div className="flex items-center mb-6">
            <input type="checkbox" className="mr-2" />
            <label className="text-sm text-gray-300">Remember me</label>
          </div>

          <p className="text-gray-400 text-sm">
            New to Netflix?{" "}
            <Link
                to="/"
                className="text-white hover:underline cursor-pointer"
            >
                Sign up now.
            </Link>
            </p>


          <p className="text-xs text-gray-500 mt-4">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
            <span className="text-blue-500 hover:underline cursor-pointer">
              Learn more.
            </span>
          </p>

        </div>
      </div>
    </div>

    {}
    <SignupFooter />
    </>
  );
};

export default Signup;
