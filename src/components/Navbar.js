import { useState, useContext } from "react";
import { StateContext } from "../App.js";
import Icons from "./icons/Icons.js";
import { navlinks } from "../services/data.js";
import { Link, useLocation } from "react-router-dom";

function NavItems() {
    const location = useLocation().pathname;
    const { language } = useContext(StateContext);
    const navbar = navlinks[language]; 

    return(
        <>
            <Link 
                className={`nav-item ${
                    location === "/home" ? "nav-active" : ""
                }`} to="/home"
            >
                <li>{navbar[0].home}</li>
            </Link>

            <Link 
                className={`nav-item ${
                    location === "/places" ? "nav-active" : ""
                }`} to="/places"
            >
               <li>{navbar[0].places}</li>
            </Link>

            <Link 
                className={`nav-item ${
                    location === "/products" ? "nav-active" : ""
                }`} to="/products"
            >
                <li>{navbar[0].products}</li>
            </Link>

            <Link 
                className={`nav-item ${
                    location === "/about" ? "nav-active" : ""
                }`} to="/about"
            >
                <li>{navbar[0].about}</li>
            </Link>

            <Link 
                className={`nav-item ${
                    location === "/contact" ? "nav-active" : ""
                }`} to="/contact"
            >
                <li>{navbar[0].contact}</li>
            </Link>
        </>
    );
}

export default function Navbar() {
    const [isNavbar, setIsNavbar] = useState(false);

    return (
        <header className="relative bg-slate-50 shadow-xl border-y-2 border-primary-900 h-32 flex flex-col items-center justify-center">
            <div className="container flex items-center justify-between md:gap-0 gap-40 text-lg">
                <Link to="/home">
                    <img
                        className="h-auto md:w-48 w-44 hover:scale-105 animation"
                        src={`${process.env.PUBLIC_URL}/logo.jpg`}
                        alt="Navbar Logo"
                    />
                </Link>

                <Icons 
                    iconName="menu"
                    className="md:hidden absolute right-12 cursor-pointer"
                    onClick={() => setIsNavbar(!isNavbar)}
                />

                <nav>
                    <ul className="md:flex hidden gap-x-10">
                        <NavItems />
                    </ul>
                </nav>
            </div>

            {/* mobile navbar items */}
            <div className={`${
                    isNavbar ? "mobile-nav-active" : "!opacity-0 !h-0 pointer-events-none animation"
                } w-full h-0 opacity-0 md:hidden absolute top-28 bg-slate-50 border-b-2 border-primary-900 shadow-xl z-50 text-base`}>

                <nav className="container">
                    <ul className="flex flex-col items-center gap-6">
                        <NavItems />
                    </ul>
                </nav>
            </div> 
        </header>
    );
}