import AOS from 'aos';
import 'aos/dist/aos.css';
import Icons from "./icons/Icons";
import { Link, useLocation } from "react-router-dom";

export default function InfoSection({ 
    icon,
    size, 
    image,
    place, 
    button,
    address, 
    mainTitle, 
    secondTitle, 
    servicesTitle, 
    servicesInfo1,
    servicesInfo2,  
    servicesSecondTitle, 
}) {
    AOS.init({
        once: true,
        duration: 800,
    });
    
    const location = useLocation().pathname;
    
    return(
        <div className="md:section-default mobile-section-default flex-col gap-12">
            <h4
                className="text-primary-700 md:text-4xl text-2xl underline underline-offset-8 decoration-4"
            >
                {mainTitle} {secondTitle} {servicesTitle}
            </h4>

            <div className="flex md:flex-row flex-col items-center justify-center md:gap-40 gap-10">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-transparent to-transparent"></div>
                    <img src={image} alt={place} width={size} height={size} />
                </div>

                <div className="flex flex-col items-center justify-center md:gap-2 gap-0" data-aos="fade-up">

                    <h5 className="text-primary-700 md:text-4xl text-xl">
                        {servicesSecondTitle}
                    </h5><br/>
                    
                    <Icons iconName={icon} /><br/>
                    <p className="text-primary-900 md:text-xl text-lg">
                        {address} {servicesInfo1} 
                    </p><br/>

                    <p className="text-primary-900 md:text-xl text-lg">
                        {servicesInfo2}
                    </p><br/>
                    
                    { location === "/home" ? (
                            <Link
                                className="base-button w-auto text-gray-50 hover:bg-primary-700 hover:text-gray-50 font-bold shadow-xl" 
                                to="/products"
                            >
                                {button}
                            </Link> )
                    :   <div></div> }
                </div>
            </div>
        </div>
    );
}