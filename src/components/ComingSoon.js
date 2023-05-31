import Icons from "./icons/Icons";

export default function ComingSoon() {
    return(
        <div className="container flex flex-col gap-24 items-center md:text-3xl text-xl text-primary-900">
            <div className="py-10 px-12 rounded-xl md:bg-primary-transparent bg-transparent md:shadow-2xl flex flex-col items-center gap-8">
                <h4>Detaylı ürünler sayfamız yakında sizlerle!
                    <br/><br/>
                    Ürün stoklarımız hakkında bilgi<br/>almak için bizimle iletişime geçin:
                </h4>
                
                <a href="tel:05326861593"
                    className="base-button p-2 rounded-full md:w-20 w-16 text-xl bg-primary-900 border-none hover:bg-primary-700 hover:scale-110 animation">
                    <Icons iconName="phone" className="w-12 md:w-auto h-12 md:h-auto fill-gray-300"/>
                </a>
            </div>
        </div>
    );
}