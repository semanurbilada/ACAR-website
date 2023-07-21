import { useContext } from "react";
import { StateContext } from "../App.js";
import { AboutUsData } from "../services/data.js";

export default function About() {
    const { language } = useContext(StateContext);
    const aboutData = AboutUsData[language];

    return(
        <section className="section-default md:my-0 my-10 md:text-xl sm:text-xl text-base text-primary-900">
            <div className="container grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-4">
                <div className="h-full md:bg-primary-transparent md:p-10 p-0 rounded-xl md:shadow-2xl flex flex-col items-center gap-6">
                    <h3 
                        className="font-bold md:text-2xl text-xl md:bg-transparent bg-primary-transparent rounded-xl shadow-2xl md:shadow-none"
                    >
                        {aboutData[0].title}
                    </h3>
                    <p>
                        {aboutData[0].content1}<br/><br/>
                        {aboutData[0].content2}<br/><br/>
                        {aboutData[0].content3}
                    </p>
                </div>

                <div className="h-full flex items-center bg-primary-transparent md:p-10 p-5 shadow-2xl rounded-xl">
                    <p>
                        {aboutData[0].content4}<br/><br/>
                        {aboutData[0].content5}<br/><br/>
                        {aboutData[0].content6}
                    </p>
                </div>
            </div>
        </section>
    );
}