import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';


const Footer = () => {
    return (
        <div >
          {/* bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-300 */}
               <footer className="bg-base-200 text-base-content  py-14 mt-10  bg-base-200 text-base-content">
                     <div className="px-40 mb-4 md:mb-0">
          <h1 className="text-2xl font-bold text-purple-500">Artify</h1>
          <p className="text-gray-300 mt-1">Bringing your creativity to life</p>
        </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-40 mt-8">
        <p>© 2025 Artify. All rights reserved.</p>
        <div className="flex space-x-8 mt-2 md:mt-0">
             <p  className=" hover:text-purple-500">Email <span className="items-center"><MdOutlineMarkEmailUnread/></span></p>
          <p   className=" hover:text-purple-500"> X  <BsTwitterX /></p>
          <p   className=" hover:text-purple-500">Instagram <FaInstagramSquare /></p>
           <p   className=" hover:text-purple-500">Facebook <FaFacebook /></p>
        </div>
      </div>
    </footer>
        </div>
    );
};

export default Footer;