import { useState } from "react";
import Icons from "./icons/Icons.js";
import { Link, useLocation } from "react-router-dom";

function NavItems() {
    const location = useLocation().pathname;
    return(
        <>
            <li 
                className={`nav-item ${
                    location === "/home" ? "nav-active" : ""
                }`}><Link to="/home">Ana Sayfa</Link>
            </li>

            <li 
                className={`nav-item ${
                    location === "/places" ? "nav-active" : ""
                }`}><Link to="/places">Depolarımız</Link>
            </li>

            <li 
                className={`nav-item ${
                    location === "/products" ? "nav-active" : ""
                }`}><Link to="/products">Ürünlerimiz</Link>
            </li>

            <li 
                className={`nav-item ${
                    location === "/about" ? "nav-active" : ""
                }`}><Link to="/about">Hakkımızda</Link>
            </li>

            <li 
                className={`nav-item ${
                    location === "/contact" ? "nav-active" : ""
                }`}><Link to="/contact">İletişim</Link>
            </li>
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
                    isNavbar ? "mobile-nav-active" : "!opacity-0 !h-0 animation"
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