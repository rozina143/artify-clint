import { createBrowserRouter } from "react-router";
import Mainlayout from "./Mainlayout";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import SingUp from "../components/SignUp/SingUp";
import PrivateRoute from "./PrivateRout";
import AddArtwork from "../components/AddArtwork/AddArtwork";
import Errorpage from "../Errorpage/Errorpage";
import ArtworkPage from "../components/ArtworkPage/ArtworkPage";
 "../components/Login/Login";

export const router =createBrowserRouter([ {
    path: "/",
    Component: Mainlayout,
    children: [
      { index: true, 
      Component: Home ,
       loader: () => fetch("http://localhost:3000/homepage")
    },
      { index: true, 
        path:"/artworkpage",
      Component: ArtworkPage ,
      loader:()=>fetch('http://localhost:3000/artify')
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
  path: "/details/:id",
  element: (
    <PrivateRoute>
      <ArtworkDetails />
    </PrivateRoute>
  ),
  loader: ({ params }) =>
    fetch(`http://localhost:3000/artwork/${params.id}`)
},
  {
    path:"*",
    element:<Errorpage></Errorpage>,
  }
  ] 
     
  },
]);