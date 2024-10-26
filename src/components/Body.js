import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browser from "./Browser";
import Login from "./Login";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
// import { auth } from "./fireBase";
import {auth} from '../utils/fireBase'
import { addUser,removeUser } from "../utils/userSlice";
import Header from "./Header";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browser",
    element: <Browser />,
  },
  {
    path: "/header",
    element: <Header />,
  },
 
]);


const Body = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
onAuthStateChanged(auth,(user)=>{
  if (user) {
    // user signIn
    const{uid, email, displayName,photoURL} = user;
    dispatch(addUser({uid:uid, email:email, displayName:displayName,photoURL}));


}else{
// user Sign out
dispatch(removeUser());
}
});

  },[])
  return (
    <RouterProvider router={router} />
  );
};

export default Body;
