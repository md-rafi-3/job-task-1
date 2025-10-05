import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ChatBot></ChatBot>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;