import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { usernameValidate } from "../helper/validate.js";

import styles from "../styles/Username.module.css";

export default function Username() {
  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validate: usernameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  // Make sure formik has been initialized before accessing getFieldProps
  const usernameProps = formik.getFieldProps("username");

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
                placeholder="Username"
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
              Not a member?{" "}
              <Link to="/register" className="text-red-500">
                Register Now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


// import React from "react";
// import { Link } from "react-router-dom";
// import avatar from "../assets/profile.png";
// import {Toaster} from "react-hot-toast";
// import { useFormik } from "formik";

// import styles from "../styles/Username.module.css";

// export default function Username() {

//   const formik = useFormik({
//     initialValues : {
//       username: ''
//     },
//     validateOnBlur: false,
//     validateOnChange: false,
//     onSubmit : async values =>{
//       console.log(values);
//     }
//   })
//   return (
//     <>
//       <div className="container mx-auto">
//         <div className="flex justify-center items-center h-screen ">
//           <div className={styles.glass}>
//             <div className="title flex flex-col items-center">
//               <h4 className="text-3xl font-bold">Hello Again !</h4>
//               <span className="py-4 text-xl w-2/3 text-center text-gray-500">
//                 Explore More by connecting with us.
//               </span>
//             </div>

//             <form className="py-1" onSubmit={formik.handleSubmit}>
//               <div className="profile flex justify-center py-4">
//                 <img src={avatar} className={styles.profile_img} alt="avatar" />
//               </div>

//               <div className="textbox flex flex-col items-center gap-6">
//                 <input
//                 {...formik.getFieldProps('username')}
//                   className={`${styles.textbox} ${styles.input}`}
//                   type="text"
//                   placeholder="Username"
//                 />
//                 <button className={styles.btn} type="submit">
//                   Let's Go
//                 </button>
//               </div>

//               <div className="text-center py-4">
//                 <span className="text-gray-500">
//                   Not a Member{" "}
//                   <Link className="text-red-500" to="/register">
//                     Register Now
//                   </Link>
//                 </span>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
