import React from "react";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import styles from "../styles/Username.module.css";

export default function Recovery() {
  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="min-h-screen flex justify-center items-center">
        <div
          className={`${styles.container} bg-gray-100 p-8 rounded-md shadow-md`}
        >
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold">Recovery</h2>
            <p className="text-xl text-gray-500">
              Enter OTP to recover password.
            </p>
          </div>
          <form className="text-center p-10">
            <div className="input text-center">
              <span className="py-4 text-sm text-left text-gray-500">
                Enter 6 digit OTP sent to your email address.
              </span>
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="OTP"
                  className={`${styles.input} w-full p-3 border border-gray-300 rounded-md`}
                />
              </div>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">Can't get OTP?</span>
              <button
                type="submit"
                className={`${styles.btn} w-full py-3 px-4 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300`}
              >
                Resend
              </button>
            </div>
            <div className="mt-4 text-gray-500">
              Forgot Password?{" "}
              <Link to="/recovery" className="text-red-500">
                Recover Now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
