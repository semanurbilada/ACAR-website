import Icons from "../components/icons/Icon";

export default function Contact() {
    return(
        <section className="section-default justify-around md:text-xl text-lg gap-20 text-primary-900">
            <div className="contact-items">
                <Icons iconName="phone" />
                <a
                    href="https://api.whatsapp.com/send?phone=905326861593" 
                    target='_blank' rel='noopener noreferrer nofollow'>
                    WhatsApp için tıklayınız!
                </a>
                <a href="tel:(0262) 658 13 60">Ofis: (0262) 658 13 60</a>
            </div>

            <div className="contact-items">
                <Icons iconName="users" />
                <p>Murtaza Bilada<br/><br/>Selahattin Bilada</p>
            </div>

            <div className="contact-items">
                <Icons iconName="mail" />
                <a
                    href="mailto:info@acargeridonusum.com.tr" 
                    target='_blank' rel='noopener noreferrer nofollow'>
                    Mail için tıklayınız!
                </a>
            </div>
        </section>
    );    
}