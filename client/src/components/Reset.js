import React from "react";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { resetPasswordValidation } from "../helper/validate.js";

import styles from "../styles/Username.module.css";

export default function Reset() {
  const formik = useFormik({
    initialValues: {
      password: "admin@123",
      confirm_pwd: "admin@123",
    },
    validate: resetPasswordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  // Make sure formik has been initialized before accessing getFieldProps
  const passwordProps = formik.getFieldProps("password");
  const confirm_pwdProps = formik.getFieldProps("confirm_pwd");

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="min-h-screen flex justify-center items-center">
        <div
          className={`${styles.container} bg-gray-100 p-8 rounded-md shadow-md`}
        >
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold">Reset</h2>
            <p className="text-xl text-gray-500">
              Enter your new password.
            </p>
          </div>
          <form onSubmit={formik.handleSubmit} className="text-center py-15">
            <div className="mb-6">
              <input
                {...passwordProps}
                type="text"
                placeholder="New Password"
                className={`${styles.input} w-full p-3 border border-gray-300 rounded-md`}
              />
            </div>

            <div className="mb-6">
              <input
                {...confirm_pwdProps}
                type="text"
                placeholder="Repeat Password"
                className={`${styles.input} w-full p-3 border border-gray-300 rounded-md`}
              />
            </div>
            <button
              type="submit"
              className={`${styles.btn} w-full py-3 px-4 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300`}
            >
              Sign in
            </button>
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
