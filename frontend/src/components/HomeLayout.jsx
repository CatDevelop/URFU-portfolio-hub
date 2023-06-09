import React from 'react';
import {Outlet} from 'react-router-dom';
import Footer from './Footer/Footer';
import MainContent from "./MainContent/MainContent";
import NavBar from "./NavBar/NavBar";
import {ToastContainer} from "react-toastify";
import WidthContent from "./WidthContent/WidthContent";

const HomeLayout = () => {
    return (
        <div>
            <NavBar type="main"/>
            <WidthContent>
                <Outlet/>
            </WidthContent>
            <Footer/>
        </div>
    );
};

export default HomeLayout;
