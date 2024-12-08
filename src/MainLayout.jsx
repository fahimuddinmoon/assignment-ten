import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Banner from "./banner";
import Home from "./Home";
import  { Toaster } from 'react-hot-toast';


const MainLayout = () => {
    return (
        <div>
            <Toaster></Toaster>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;