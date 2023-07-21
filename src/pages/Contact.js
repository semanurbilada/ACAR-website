import { useContext } from "react";
import { StateContext } from "../App.js";
import Icons from "../components/icons/Icons";
import { ContactData } from "../services/data.js";

export default function Contact() {
    const { language } = useContext(StateContext);
    const contact = ContactData[language];

    return(
        <section className="section-default">
            <div className="container grid md:grid-cols-2 grid-cols-1 md:gap-32 md:text-xl text-lg text-primary-900">
                <div className="contact-items">
                    <Icons iconName="phone" className="w-12 md:w-auto h-12 md:h-auto" />
                    <a
                        href="https://api.whatsapp.com/send?phone=905326861593" 
                        target='_blank' rel='noopener noreferrer nofollow'>
                        {contact[0].click1}
                    </a>
                    <a href="tel:(0262) 658 13 60">{contact[0].phone}</a>
                </div>
                
                <div className="contact-items">
                    <Icons iconName="mail" className="w-12 md:w-auto h-12 md:h-auto"/>
                    <a
                        href="mailto:info@acargeridonusum.com.tr" 
                        target='_blank' rel='noopener noreferrer nofollow'>
                        {contact[0].click2}
                    </a>
                </div>
            </div>
        </section>
    );    
}