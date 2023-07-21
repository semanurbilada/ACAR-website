import { useContext } from "react";
import { StateContext } from "../App";

export default function FixedButtons() {
    const { language, setLanguage } = useContext(StateContext);

    const toggleLanguage = () => {
        if ( language === "TR" ) {
            setLanguage("EN");
        }
        else if ( language === "EN") {
            setLanguage("TR");
        }
    };

    return(
        <div 
            className="fixed bottom-20 right-0 z-30 md:text-xl text-base"
        >
            { language === "TR" ? (
                <button 
                    className="fixed-button" 
                    onClick={toggleLanguage}>EN
                </button>
            ) : (
                <button 
                    className="fixed-button" 
                    onClick={toggleLanguage}>TR
                </button>
            )}
        </div>
    );
}