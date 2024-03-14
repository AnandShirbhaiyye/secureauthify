import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { passwordValidate } from "../helper/validate.js";

import styles from "../styles/Username.module.css";

export default function Password() {
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  // Make sure formik has been initialized before accessing getFieldProps
  const usernameProps = formik.getFieldProps("password");

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="min-h-screen flex justify-center items-center">
        <div
          className={`${styles.container} bg-gray-100 p-8 rounded-md shadow-md`}
        >
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold">Hello Again!</h2>
            <p className="text-xl text-gray-500">
              Explore more by connecting with us.
            </p>
          </div>
          <form onSubmit={formik.handleSubmit} className="text-center">
            <div className="mb-6">
              <div className="profile flex justify-center py-4">
                <img src={avatar} className={styles.profile_img} alt="avatar" />
              </div>
              <input
                {...usernameProps}
                type="text"
                placeholder="Password"
                className={`${styles.input} w-full p-3 border border-gray-300 rounded-md`}
              />
            </div>
            <button
              type="submit"
              className={`${styles.btn} w-full py-3 px-4 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300`}
            >
              Let's Go
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
