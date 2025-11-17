import React from 'react';
import { Link } from 'react-router';

const Errorpage = () => {
    return (
       <div className="flex flex-col justify-center items-center h-screen  bg-red-950 text-center mt-8">
      <h1 className="text-6xl font-bold text-orange-200 mb-5">404</h1>
      <p className="text-xl mb-5">Oops! Page Not Found</p>
      <Link to="/" className="bg-purple-600 text-white px-5 py-2 rounded">Go Home</Link>
    </div>
    );
};

export default Errorpage;