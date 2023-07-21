import Icons from "./icons/Icons";
import { useContext } from "react";
import { StateContext } from "../App.js";
import { ProductsData } from "../services/data";

export default function ComingSoon() {
    const { language } = useContext(StateContext);
    const productsData = ProductsData[language];

    return(
        <div className="md:bg-primary-transparent bg-transparent md:shadow-2xl rounded-xl flex flex-col gap-24 items-center">
            <div className="container py-14 px-12 flex flex-col items-center gap-8 md:text-3xl text-xl text-primary-900">
                <h4>{productsData[0].content1}
                    <br/><br/>
                    {productsData[0].content2}
                </h4>
                
                <a href="tel:05326861593"
                    className="base-button p-2 rounded-full md:w-20 w-16 text-xl bg-primary-900 border-none hover:bg-primary-700 hover:scale-110 animation">
                    <Icons iconName="phone" className="w-12 md:w-auto h-12 md:h-auto fill-gray-300"/>
                </a>
            </div>
        </div>
    );
}