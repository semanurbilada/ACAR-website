import { useContext } from "react";
import { StateContext } from "../App.js";
import PopUp from "../components/PopUp";

import HomeSwiper from "../components/HomeSwiper";
import InfoSection from "../components/InfoSection";
import { InfoSectionData } from "../services/data.js";

export default function Home() {
    const { language } = useContext(StateContext);
    const infoData = InfoSectionData[language];

    return(
        <div>
            <HomeSwiper />

            <section className="container my-20 md:my-0">
                <InfoSection 
                    image="/services.jpg" size={800}
                    servicesTitle={infoData[0].servicesTitle}
                    servicesSecondTitle={infoData[0].servicesSecondTitle}
                    servicesInfo1={infoData[0].servicesInfo1}
                    servicesInfo2={infoData[0].servicesInfo2}
                    button={infoData[0].button}
                />
            </section>
        </div>
    );
}