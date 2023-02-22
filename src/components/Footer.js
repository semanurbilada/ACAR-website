import { Link, useLocation } from "react-router-dom";
import Icons from "./icons/Icon.js";
//import Map from "./maps/Map.js";


export default function Footer() {
    const location = useLocation().pathname;

    return(
        <footer className="relative bg-gray-transparent md:text-lg text-base text-primary-900">

            { location === "/about" || location === "/contact" ? (
                <div className="container py-14 flex flex-col items-center justify-center gap-12">
                    <div className="flex items-center justify-center gap-2">
                        <p>Sosyal Medyadan bizi takip edin:</p>
                        <div className="flex items-center jusitfy-center text-center gap-3">
                            <a 
                                href="https://www.facebook.com/ACAR-Geri-Dönüşüm-Ve-Metal-Ürn-San-Tic-Ltd-Şti-780224742056349/?fref=nf/" 
                                target='_blank' rel='noopener noreferrer nofollow'>
                                <Icons className="icon-social" iconName="facebook"/>
                            </a>
                            <a 
                                href="https://www.instagram.com/acar_geri_donusum/" 
                                target='_blank' rel='noopener noreferrer nofollow'>
                                <Icons className="icon-social" iconName="instagram"/>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 items-center justify-center">
                        <p className="text-center">Adresimize ulaşmak için:</p><br/>
                        
                    </div>
                </div>
            ) : 
                <div className="container py-14 flex md:flex-row flex-col items-center justify-center gap-12">
                    <div className="flex flex-col md:items-start items-center justify-center gap-8 basis-1/3">
                        <img 
                            className="h-auto md:w-56 w-44 cursor-pointer hover:scale-105 animation" 
                            src="/logo.jpg" 
                            alt="Footer Logo"       
                        />
                        <p className="md:text-start">
                            40 Yılı aşkın tecrübemizle!
                            <br/>Demir, Çelik ve Metal ürünleri ticareti yaparak sektöre katkıda bulunuyoruz.
                            <br/><br/><Link to="/about" className="underline">Devamını Oku</Link>
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center basis-2/3">
                        <h4 className="lg:text-2xl md:text-xl underline underline-offset-8 decoration-4">İletişim</h4><br/><br/>
                        <a 
                            href="tel:0262 658 13 60" 
                            target='_blank' 
                            rel='noopener noreferrer nofollow'>
                            Telefon: (0262) 658 13 60
                        </a>
                        <a 
                            href='mailto:info@acargeridonusum.com.tr' 
                            target='_blank' 
                            rel='noopener noreferrer nofollow'>
                            Mail: info@acargeridonusum.com.tr
                        </a><br/>
                        
                        <p>Sosyal Medyadan bizi takip edin!</p>
                        <div className="flex items-center jusitfy-center text-center gap-3">
                            <a 
                                href="https://www.facebook.com/ACAR-Geri-Dönüşüm-Ve-Metal-Ürn-San-Tic-Ltd-Şti-780224742056349/?fref=nf/" 
                                target='_blank' rel='noopener noreferrer nofollow'>
                                <Icons className="icon-social" iconName="facebook"/>
                            </a>
                            <a 
                                href="https://www.instagram.com/acar_geri_donusum/" 
                                target='_blank' rel='noopener noreferrer nofollow'>
                                <Icons className="icon-social" iconName="instagram"/>
                            </a>
                        </div>
                    </div>

                    <div className="basis-1/3">
                        <p className="text-start">Adresimize ulaşmak için:</p><br/>
                        
                    </div>
                </div>
            }

            <ul class="container py-6 text-sm md:text-base font-bold">
                <li>Copyright © 2023 | Acar Geri Dönüşüm Ltd Şti</li>
            </ul>
        </footer>
    );
}