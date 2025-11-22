import { createBrowserRouter, redirect } from "react-router";
import Mainlayout from "./Mainlayout";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import SingUp from "../components/SignUp/SingUp";
import PrivateRoute from "./PrivateRout";
import AddArtwork from "../components/AddArtwork/AddArtwork";
import Errorpage from "../Errorpage/Errorpage";
import ArtworkPage from "../components/ArtworkPage/ArtworkPage";
import ArtworkDetails from "../components/ArtworkDetails/ArtworkDetails";
import MyFavoritesPage from "../components/MyFavoritesPage/MyFavoritesPage";
import MyGallery from "../components/MyGalleryPage/MyGallery";


export const router =createBrowserRouter([ {
    path: "/",
    Component: Mainlayout,
    children: [
      { index: true, 
      Component: Home ,
       loader: () =>  fetch("http://localhost:3000/homepage").then(res => res.json())
    },
     {
        path:"/artworkpage",
      Component: ArtworkPage ,
      loader:()=> fetch('http://localhost:3000/artify')
    .then(res => res.json())
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
  path: "/artwork/:id",
  element: (
    <PrivateRoute>
      <ArtworkDetails />
    </PrivateRoute>
  ),
  loader: ({ params }) =>
     fetch(`http://localhost:3000/artwork/${params.id}`)
            .then(res => res.json())
},

{
  path: "/favorites",
  element: (
    <PrivateRoute>
    <MyFavoritesPage></MyFavoritesPage>
    </PrivateRoute>
  ),

},
{
  path: "mygallery",
        element: (
          <PrivateRoute>
            <MyGallery />
          </PrivateRoute>
        )
      },

  {
    path:"*",
    element:<Errorpage></Errorpage>,
  }
  ] 
     
  },
]);