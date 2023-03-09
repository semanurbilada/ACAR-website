export default function About() {
    return(
        <section className="section-default md:my-0 my-10 md:text-xl sm:text-xl text-base text-primary-900">
            <div className="container grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-4">
                <div className="h-full md:bg-primary-transparent md:p-10 p-0 rounded-xl md:shadow-2xl flex flex-col items-center">
                    <h3 
                        className="font-bold md:text-2xl text-xl md:bg-transparent bg-primary-transparent rounded-xl shadow-2xl md:shadow-none"
                    >
                        40 Yılı aşkın tecrübemizle!
                    </h3>
                    <p>
                        <br/>Demir, Çelik ve Metal ürünleri ticareti yaparak sektöre katkıda bulunuyoruz.<br/><br/>
                        1965 yılında babalarımızın başlatmış olduğu bu alanda, 2014 yılından itibaren Acar Geri Dönüşüm olarak devam ediyoruz.<br/><br/>
                        Sektöre katkıda bulunmak açısından; bu zamana kadar edindiğimiz, babadan oğula geçen tecrübelerimizi kullanıyoruz.
                    </p>
                </div>

                <div className="h-full flex items-center bg-primary-transparent md:p-10 p-5 shadow-2xl rounded-xl">
                    <p>
                        Demir, çelik, metal, sac ve profil gibi ürünleri farklı birçok sanayi kolundan temin edip yurt içi ve yurt dışı ticaretini yapıyoruz.<br/><br/>
                        Ticaretini yaptığımız ürünlerimiz çoğunlukla ağır sanayi mamulleri olup, 1 ve 2.kalite malzeme tedariği yapmaktayız.<br/><br/>
                        Hem ihracat, hem de ithalat yaparak firma çizgimizi bozmadan yolumuzda ilerlemeye çalışıyoruz.
                    </p>
                </div>
            </div>
        </section>
    );
}