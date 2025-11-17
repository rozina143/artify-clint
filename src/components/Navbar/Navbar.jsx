import React, { useContext } from 'react';
import { AuthContext } from '../../page/AuthProvider/AuthProvider';
import { Link } from 'react-router';


const Navbar = () => {

  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md py-4 px-6 flex justify-between items-center">

      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-purple-600">
        Artify
      </Link>
    <div className="ml-6 flex items-center space-x-4  mr-7">
        <Link className=' hover:text-purple-500' to="/">Home</Link>
        {user && <Link to="/profile" className='ml-4  hover:text-purple-500'>My Profile</Link>}
      </div>

      <div className="flex items-center space-x-4">
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
          <div className="relative group">
            <img
              src={user.photoURL}
              alt={user.displayName}
              className="w-10 h-10 rounded-full cursor-pointer"
            />

            <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-700 shadow-lg rounded opacity-0 group-hover:opacity-100 transition-all p-2 z-10">
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
