import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Mainlayout = () => {
    return (
         <div className='max-w-6xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
             <ToastContainer position="top-right" autoClose={3000} />                
        </div>
    );
};

export default Mainlayout;