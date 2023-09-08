import Icons from "./icons/Icons";
import { useContext } from "react";
import { StateContext } from "../App.js";
import { MobileProductsData } from "../services/data";

export default function ComingSoon() {
    const { language } = useContext(StateContext);
    const productsData = MobileProductsData[language];

    return(
        <div className="bg-primary-transparent shadow-2xl rounded-xl flex flex-col gap-24 items-center">
            <div className="container sm:py-14 py-10 sm:px-12 px-8 flex flex-col items-center gap-8 sm:text-xl text-base text-primary-900">
                <h4>{productsData[0].content1}
                    <br/><br/>
                    {productsData[0].content2}
                </h4>
                
                <a 
                    href="tel:05326861593"
                    className="p-2 rounded-full text-xl bg-primary-900 border-none hover:bg-primary-700 hover:scale-110 animation"
                >
                    <Icons iconName="phone" className="w-10 sm:w-14 h-10 sm:h-14 fill-gray-300"/>
                </a>
            </div>
        </div>
    );
}