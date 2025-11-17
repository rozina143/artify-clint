import { createBrowserRouter } from "react-router";
import Mainlayout from "./Mainlayout";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import SingUp from "../components/SignUp/SingUp";
import PrivateRoute from "./PrivateRout";
import AddArtwork from "../components/AddArtwork/AddArtwork";
import Errorpage from "../Errorpage/Errorpage";
 "../components/Login/Login";

export const router =createBrowserRouter([ {
    path: "/",
    Component: Mainlayout,
    children: [
      { index: true, 
      Component: Home 
    },
    { 
        path: "/login", 
       element: <Login></Login>,
    },
    { 
        path: "/signup", 
       element:<SingUp></SingUp>,
    },
    {
    path:"/addartwork",
    element:<PrivateRoute><AddArtwork></AddArtwork></PrivateRoute>,
  },
  {
    path:"*",
    element:<Errorpage></Errorpage>,
  }
  ] 
     
  },
]);