import { useContext } from "react";
import { StateContext } from "../App.js";
import Map from "./maps/Map.js";
import Icons from "./icons/Icons.js";
import { FooterData } from "../services/data.js";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
    const location = useLocation().pathname;
    const { language } = useContext(StateContext);
    const footerData = FooterData[language];

    return(
        <footer className="w-full bg-gray-transparent md:text-lg text-base text-primary-900">

            { location === "/about" || location === "/contact" ? (
                <div className="footer-default flex-col gap-4">
                    <div className="flex md:flex-row flex-col items-center gap-2">
                        <p>{footerData[1].link}</p>
                        <div className="flex items-center jusitfy-center text-center gap-3">
                            <a 
                                href="https://www.facebook.com/ACAR-Geri-Dönüşüm-Ve-Metal-Ürn-San-Tic-Ltd-Şti-780224742056349/?fref=nf/" 
                                target='_blank' rel='noopener noreferrer nofollow'>
                                <Icons className="icon-social w-11 md:w-auto h-11 md:h-auto" iconName="facebook"/>
                            </a>
                            <a 
                                href="https://www.instagram.com/acar_geri_donusum/" 
                                target='_blank' rel='noopener noreferrer nofollow'>
                                <Icons className="icon-social w-12 md:w-auto h-12 md:h-auto" iconName="instagram"/>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-4">
                        <p>{footerData[2].content}</p>
                        <a 
                            className="text-primary-900 md:text-xl text-lg"
                            href='https://goo.gl/maps/CW9aJ5NBCLedFv1f8' 
                            target="_blank" rel="noopener noreferrer nofollow">
                            <Map />
                        </a>
                    </div>
                </div>
            ) :
                <div className="container pt-14 grid grid-cols-1 md:grid-cols-3 items-center gap-10">
                    <div className="flex flex-col items-center justify-center gap-8">
                        <img 
                            className="h-auto md:w-56 w-44 cursor-pointer hover:scale-105 animation" 
                            src="assets/logo.jpg" 
                            alt="Footer Logo"       
                        />
                        <p className="">
                            {footerData[0].title}
                            <br/><br/>
                            {footerData[0].content}
                            <br/><br/>
                            {footerData[0].link && (
                            <Link to="/about" className="underline">
                                {footerData[0].link}
                            </Link>
                            )}
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <h4 
                            className="md:text-3xl text-xl underline underline-offset-8 decoration-4">
                            {footerData[1].title}
                        </h4>
                        <br/><br/>
                        <a 
                            href="tel:0262 658 13 60" 
                            target='_blank' 
                            rel='noopener noreferrer nofollow'>
                            {footerData[1].content1}
                        </a>
                        <a 
                            href='mailto:info@acargeridonusum.com.tr' 
                            target='_blank' 
                            rel='noopener noreferrer nofollow'>
                            {footerData[1].content2}
                        </a>
                        <br/>
                        <p>{footerData[1].link}</p>
                        <div className="flex items-center jusitfy-center text-center gap-3">
                            <a 
                                href="https://www.facebook.com/ACAR-Geri-Dönüşüm-Ve-Metal-Ürn-San-Tic-Ltd-Şti-780224742056349/?fref=nf/" 
                                target='_blank' rel='noopener noreferrer nofollow'>
                                <Icons className="icon-social w-11 md:w-auto h-11 md:h-auto" iconName="facebook"/>
                            </a>
                            <a 
                                href="https://www.instagram.com/acar_geri_donusum/" 
                                target='_blank' rel='noopener noreferrer nofollow'>
                                <Icons className="icon-social w-12 md:w-auto h-12 md:h-auto" iconName="instagram"/>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <p>{footerData[2].content}</p>
                        <a 
                            className="text-primary-900 md:text-xl text-lg"
                            href='https://goo.gl/maps/CW9aJ5NBCLedFv1f8' 
                            target="_blank" rel="noopener noreferrer nofollow">
                            <Map />
                        </a>
                    </div>
                </div>
            }
            
            <ul className="container py-6 text-sm md:text-base">
                <li>Copyright © 2023 | Acar Geri Dönüşüm Ltd Şti</li>
            </ul>
        </footer>
    );
}