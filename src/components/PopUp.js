import { useState, useEffect, useContext } from "react";
import { StateContext } from "../App.js";
import { PopupData } from "../services/data";

export default function PopUp() {
    const { language } = useContext(StateContext);
    const popupData = PopupData[language];

    const [ showPopup, setShowPopup ] = useState(
        localStorage.getItem("popupClosed") !== "true"
    );

    useEffect(() => {
        if(!showPopup) {
            localStorage.setItem("popupClosed", "true");
        }
    }, [showPopup])

    return(
        <section>
            { showPopup && 
                <div className={`h-screen w-full fixed inset-0 flex items-center justify-center z-30 bg-neutral-800 bg-opacity-60 backdrop-blur-[2px] ${
                    showPopup && "animate-open-popup"
                }`}>
                    <div className="md:w-96 w-72 bg-slate-50 md:px-10 md:py-6 px-5 py-3 rounded-xl flex flex-col gap-3 md:text-base text-sm">
                        <div className="flex items-center justify-between text-lg border-b-2 border-primary-700 pb-2">
                            <h3 className="text-primary-700">{popupData[0].title}</h3>
                            <button 
                                className="cursor-pointer text-primary-700 font-medium md:text-xl text-base" 
                                onClick={() => setShowPopup(false)}>X
                            </button> 
                        </div>

                        <div className="w-full flex flex-col gap-3 text-primary-900">
                            <p className="text-start">{popupData[0].content1}</p>
                            <ul className="flex justify-between">
                                <li>{popupData[0].content2}</li>
                                <li>{popupData[0].hour}</li>
                            </ul>

                            <ul className="flex justify-between">
                                <li>{popupData[0].content3}</li>
                                <li>{popupData[0].hour}</li>
                            </ul>

                            <ul className="flex justify-between">
                                <li>{popupData[0].content4}</li>
                                <li>{popupData[0].hour}</li>
                            </ul>

                            <ul className="flex justify-between">
                                <li>{popupData[0].content5}</li>
                                <li>{popupData[0].hour}</li>
                            </ul>

                            <ul className="flex justify-between">
                                <li>{popupData[0].content6}</li>
                                <li>{popupData[0].hour}</li>
                            </ul>

                            <ul className="flex justify-between">
                                <li>{popupData[0].content7}</li>
                                <li>{popupData[0].hour}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            }    
        </section>
    );
}