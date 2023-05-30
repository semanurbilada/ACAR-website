export default function FixedButtons() {
    return(
        <div 
            className="fixed md:bottom-10 bottom-40 md:right-10 right-5 flex md:flex-row flex-col items-center md:gap-6 gap-4 z-30 md:text-xl text-base"
        >
            <button className="fixed-button">TR</button>
            <button className="fixed-button">EN</button>
        </div>
    );

    //TODO: butonlar, useContext'te tercihe göre render olmalı !
}