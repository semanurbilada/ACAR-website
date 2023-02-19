import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icons from "./icons/Icon.js";

export default function Navbar() {
    const location = useLocation().pathname;
    const [isNavbar, setIsNavbar] = useState(false);

    return (
        <header className="relative bg-slate-50 shadow-lg border-y-2 border-primary-900 h-32 flex flex-col items-center justify-center">
            <div className="container flex items-center justify-between md:gap-0 gap-40 text-lg">
                <Link className="hover:scale-105 animation" to="/home">
                    <img
                        className="h-auto md:w-48 w-44"
                        src={`${process.env.PUBLIC_URL}/logo.jpg`}
                        alt="Logo"
                    />
                </Link>

                <Icons 
                    iconName="menu"
                    className="md:hidden absolute right-12 cursor-pointer"
                    onClick={() => setIsNavbar(!isNavbar)}
                />

                <nav>
                    <ul className="md:flex hidden gap-x-10">
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
                    </ul>
                </nav>
            </div>

            {/* mobile navbar items */}
            <div className={`${
                    isNavbar ? "mobile-nav-active" : " !opacity-0 !h-0 animation"
                } w-full h-0 opacity-0 md:hidden absolute top-28 bg-slate-50 border-b-2 border-primary-900`}>

                <nav className="container">
                    <ul className="flex flex-col items-center gap-6">
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
                    </ul>
                </nav>
            </div> 
        </header>
    );
}