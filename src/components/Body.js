import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browser from "./Browser";
import Login from "./Login";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
// import { auth } from "./fireBase";
import {auth} from '../utils/fireBase'
import { addUser,removeUser } from "../utils/userSlice";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browser",
    element: <Browser />,
  },
 
]);


const Body = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
onAuthStateChanged(auth,(user)=>{
  if (user) {
    // user signIn
    const{uid, email, displayName} = user;
    dispatch(addUser({uid:uid, email:email, displayName:displayName}));


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
