// import Header from "./Header";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { MdCancelPresentation } from "react-icons/md";
// import { FiLoader } from "react-icons/fi";
// import { useState } from "react";

// // Define Zod schema for validation
// const schema = z.object({
//   emailOrPhone: z
//     .string()
//     .nonempty("Email or phone number is required")
//     .refine((value) => value.includes("@"), {
//       message: "Email must include @",
//     }),

//   password: z
//     .string()
//     .min(3, "Password must be at least 3 characters long")
//     .nonempty("Password is required"),

//   fullName: z
//     .string()
//     .min(3, "Full Name must be at least 3 characters long")
//     .nonempty("Full Name is required"),
// });

// const Login = () => {
//   const [isSignInForm, setIsSignInForm] = useState(true);

//   const handleClick = () => {
//     setIsSignInForm(!isSignInForm);
//   };

//   const {
//     register,
//     handleSubmit,
//     setError,
//     formState: { errors, isSubmitting },
//   } = useForm({
//     resolver: zodResolver(schema),
//   });

//   const onSubmit = async (data) => {
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       console.log(data);
//       throw new Error("Email is already taken");
//     } catch (error) {
//       setError("root", {
//         type: "manual",
//         message: error.message,
//       });
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-black bg-opacity-50"
//         style={{
//           backgroundImage: "url('./images/bgImage.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           height: "auto",
//         }}
//       ></div>
//       <div
//         className="text-white absolute my-7 mx-auto
//                 right-0 left-0
//                 bg-black
//                 sm:w-5/12 md:w-6/12 lg:w-4/12 xl:w-3/12
//                 h-auto
//                 p-6 sm:p-8 md:p-10
//                 m-auto rounded-lg bg-opacity-80 shadow-lg"
//       >
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <h1 className="text-2xl font-bold py-4 m-4">
//             {isSignInForm?"Sign In":"Sign Up"}
//             </h1>
//             {!isSignInForm && (
//   <>
//     <input
//       {...register("fullName")}
//       type="text"
//       placeholder="Full Name"
//       className="p-4 m-2 rounded-lg w-full bg-gray-700 text-white placeholder-gray-500 border border-gray-600 focus:outline-none focus:border-white"
//     />
//     {errors.fullName && (
//       <p className="text-red-500 flex gap-2 items-center">
//         <MdCancelPresentation />
//         {errors.fullName.message}
//       </p>
//     )}
//   </>
// )}

//           <input
//             {...register("emailOrPhone")}
//             type="text"
//             placeholder="Email or phone number"
//             className="p-4 m-2 rounded-lg w-full bg-gray-700 text-white placeholder-gray-500 border border-gray-600 focus:outline-none focus:border-white"
//           />
//           {errors.emailOrPhone && (
//             <p className="text-red-500 flex gap-2 items-center">
//               <MdCancelPresentation />
//               {errors.emailOrPhone.message}
//             </p>
//           )}

//           <input
//             {...register("password")}
//             type="password"
//             placeholder="Password"
//             className="p-4 m-2 rounded-lg w-full bg-gray-700 text-white placeholder-gray-500 border border-gray-600 focus:outline-none focus:border-white"
//           />
//           {errors.password && (
//             <p className="text-red-500 flex gap-2 items-center">
//               <MdCancelPresentation />
//               {errors.password.message}
//             </p>
//           )}

// <button
//   disabled={isSubmitting}
//   type="submit"
//   className="p-4 m-2 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-full flex items-center justify-center"
// >
//   {isSubmitting ? (
//     <>
//       <FiLoader className="animate-spin mr-2" />
//       Submitting...
//     </>
//   ) : (
//     isSignInForm ? "Sign In" : "Sign Up"
//   )}
// </button>

//           {errors.root && (
//             <p className="text-red-500 flex gap-2 items-center">
//               <MdCancelPresentation />
//               {errors.root.message}
//             </p>
//           )}
//         </form>
//         <h1 className="flex justify-center items-center text-white font-weight: 400">
//           OR
//         </h1>
//         <button className="p-2 m-2 text-white bg-gray-400 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full flex items-center justify-center">
//           Use a Sign-In Code
//         </button>
//         <h1 className="flex justify-center items-center text-white font-semibold font-weight: 400">
//           Forget Password?
//         </h1>
//         <div className="p-2 m-2 text-white flex">
//           <div className="flex items-center mb-4">
//           {isSignInForm &&

//           <div><input
//               id="default-checkbox"
//               type="checkbox"
//               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//             />
//          <label
//               htmlFor="default-checkbox"
//               className="text-white ms-2 text-lg font-medium dark:text-gray-300"
//             >
//               Remember me
//             </label>
//             </div>}
//           </div>
//         </div>
//         <div className="flex gap-1 p-2  m-2">
//          {isSignInForm && <p className="text-gray-400"> New to Netflix?</p>}
//           <span className="font-semibold cursor-pointer"
//            onClick={handleClick}>
//             {isSignInForm?
//           "Sign Up Now":"Already registered? Sign In"}
//           </span>
//         </div>
//         <div>
//           <h1 className="p-2 m-4 text-sm ">
//             <p className="text-gray-400 justify-around"> This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
//             <span className="cursor-pointer text-textDecoration: underline">Learn more.</span>
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
import Header from "./Header";
import { FiLoader } from "react-icons/fi";
import { useRef, useState } from "react";
import { ValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/fireBase";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  // Form Validation and submission logic
  const handleForm = async () => {
    setIsLoading(true); // Start loading
    const emailValue = email.current?.value;
    const passwordValue = password.current?.value;
    const nameValue = isSignInForm ? null : name.current?.value;

    // Validate form data
    const message = ValidateData(emailValue, passwordValue, nameValue);
    if (message) {
      setErrorMessage(message);
      setIsLoading(false);
      return;
    }

    // Sign In or Sign Up logic
    try {
      let userCredential;
  
      if (!isSignInForm) {
        // Sign Up logic
        userCredential = await createUserWithEmailAndPassword(auth, emailValue, passwordValue);
        console.log("User signed up:", userCredential.user);
        navigate('/')
      } else {
        // Sign In logic
        userCredential = await signInWithEmailAndPassword(auth, emailValue, passwordValue);
        console.log("User signed in:", userCredential.user);
        navigate('/browser')
      }
  
      // You can also access user data here for further use
      const user = userCredential.user;
      console.log("User data:", user); // Log the user object
    } catch (error) {
      // Set error message if sign in or sign up fails
      setErrorMessage(error.code + " - " + error.message);
    } finally {
      setIsLoading(false); // Stop loading after the process is done
    }
  };

  const handleClick = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div
        className="absolute inset-0 bg-cover bg-center bg-black bg-opacity-50"
        style={{
          backgroundImage: "url('./images/bgImage.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "auto",
        }}
      ></div>
      <div
        className="text-white absolute my-7 mx-auto 
                right-0 left-0 
                bg-black 
                sm:w-5/12 md:w-6/12 lg:w-4/12 xl:w-3/12 
                h-auto 
                p-6 sm:p-8 md:p-10 
                m-auto rounded-lg bg-opacity-80 shadow-lg"
      >
        <form onSubmit={(e) => e.preventDefault()}>
          <h1 className="text-2xl font-bold py-4 m-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 m-2 rounded-lg w-full bg-gray-700 text-white placeholder-gray-500 border border-gray-600 focus:outline-none focus:border-white"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email or phone number"
            className="p-4 m-2 rounded-lg w-full bg-gray-700 text-white placeholder-gray-500 border border-gray-600 focus:outline-none focus:border-white"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 m-2 rounded-lg w-full bg-gray-700 text-white placeholder-gray-500 border border-gray-600 focus:outline-none focus:border-white"
          />

          {errorMessage && (
            <p className="py-2 text-red-500 font-bold text-lg flex gap-2 items-center">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            className="p-4 m-2 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-full flex items-center justify-center"
            disabled={isLoading}
            onClick={handleForm}
          >
            {isLoading ? (
              <>
                <FiLoader className="animate-spin mr-2" />
                Submitting...
              </>
            ) : isSignInForm ? (
              "Sign In"
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        <h1 className="flex justify-center items-center text-white font-weight: 400">OR</h1>
        <button className="p-2 m-2 text-white bg-gray-400 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full flex items-center justify-center">
          Use a Sign-In Code
        </button>
        <h1 className="flex justify-center items-center text-white font-semibold text-xl cursor-pointer">Forget Password?</h1>

        <div className="flex gap-1 p-2 m-2">
          {isSignInForm && <p className="text-gray-400">New to Netflix?</p>}
          <span className="font-semibold cursor-pointer" onClick={handleClick}>
            {isSignInForm ? "Sign Up Now" : "Already registered? Sign In"}
          </span>
        </div>

        <div>
          <h1 className="p-2 m-4 text-sm">
            <p className="text-gray-400 justify-around">
              This page is protected by Google reCAPTCHA to ensure you're not a bot.
            </p>
            <span className="cursor-pointer text-textDecoration: underline">Learn more.</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
