import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../page/AuthProvider/AuthProvider';
import { Link, useLocation } from 'react-router';


const Navbar = () => {
   const { user, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light"); 
  // Apply theme 
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.setAttribute("data-theme", storedTheme);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };


  const location = useLocation();

  const isDetailsPage = location.pathname.startsWith("/artwork/");
  return (
    <nav className="bg-base-200 text-base-content  shadow-md py-4 px-20 flex flex-wrap  justify-between items-center">
{/* bg-white dark:bg-gray-800 */}
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-purple-600">
        Artify
      </Link>
  <div>
              <button className="btn btn-outline btn-sm" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
        </div>

    <div className="ml-6 flex flex-wrap items-center space-x-4  mr-7">
        <Link className=' hover:text-purple-500' to="/">Home</Link>
          <Link className=' hover:text-purple-500' to="/artworkpage">ArtworkPage</Link>
        {user && <Link to="/addartwork" className='ml-4   hover:text-purple-500'>AddArtwork</Link>}
       
        {isDetailsPage && (
        <span className="text-blue-500 font-semibold">
           Artwork Details
        </span>
      )}
         {user &&  <Link className=' hover:text-purple-500' to="/favorites">MyFavouritesPage</Link>}
            {user &&  <Link className=' hover:text-purple-500' to="/mygallery">MyGallery</Link>}
      </div>

      <div className="flex flex-wrap justify-center items-center space-x-4">


      


        {!user ? (
          <>
            <Link
              className="px-4 py-1 border rounded hover:bg-purple-500 hover:text-white"
              to="/login"
            >
              Login
            </Link>

            <Link
              className="px-4 py-1 border rounded hover:bg-purple-500 hover:text-white"
              to="/signup"
            >
              Sign Up
            </Link>
          </>
        ) : (
          <div className="relative group ">
            <img
              src={user.photoURL || "https://via.placeholder.com/150"}
                onClick={() => setOpen(!open)}
              // https://via.placeholder.com/150
              alt={user.displayName}

              className="w-15 h-15 rounded-full cursor-pointer "
            />

            <div     className={`absolute md:right-0 mt-2 w-40 bg-white dark:bg-gray-700 shadow-lg rounded p-2 z-10 transition-all
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}>
              <p className="text-sm font-medium">{user.displayName}</p>

              <button
                onClick={logout}
                className="mt-1 w-full px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>

    </nav>
  );
};

export default Navbar;
