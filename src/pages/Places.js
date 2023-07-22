import { useContext } from "react";
import { StateContext } from "../App.js";
import InfoSection from '../components/InfoSection';
import { InfoSectionData } from "../services/data.js";

export default function Places() {
    const { language } = useContext(StateContext);
    const infoData = InfoSectionData[language];

    return(
        <section className="container flex flex-col">
            <InfoSection 
                mainTitle={infoData[0].mainTitle1}
                image="assets/main.jpg"
                place="Main"
                size={750}
                icon="location"
                address={infoData[0].address1}
            />

            <InfoSection 
                mainTitle={infoData[0].mainTitle2}
                image="assets/second.jpg"
                place="Second"
                size={700}
                icon="location"
                address={infoData[0].address2}
            />
        </section>
    );
}