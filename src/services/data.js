export const navlinks = {
    TR: [
        {
            home: "Ana Sayfa",
            places: "Depolarımız",
            products: "Ürünlerimiz",
            about: "Hakkımızda",
            contact: "İletişim",
        }
    ],
    EN: [
        {
            home: "Home",
            places: "Places",
            products: "Products",
            about: "About",
            contact: "Contact",
        }
    ]
};

export const HomeSwiperData = {
    TR: [
        { content1: "Demir, Çelik Sektörünün en köklülerinden!" },
        { content2: "Kaliteli Demir, Çelik ve Metal için doğru adres!" },
        { content3: "Sektörün lideri olarak Demir, Çelik ve Metal Geri Dönüşümüne katkıda bulunuyoruz!" }
    ],
    EN: [
        { content1: "The most rooted in the Steel Industry!" },
        { content2: "The right address for Quality Iron, Steel and Metal!" },
        { content3: "As the leader of the industry, we contribute to Iron, Steel and Metal Recycling!" }
    ]
};

//Places + services data;
export const InfoSectionData = {
    TR: [
        {
            servicesTitle: "HİZMETLERİMİZ",
            servicesSecondTitle: "Demir Çelik Ürünleri Pazarlama",
            servicesInfo1: "Firma olarak, birçok sanayi kolundan üretim artığı olan geri dönüşüm malzemelerini satın alıp bunları işleyerek tekrardan sanayiye kazandırmaktayız.",
            servicesInfo2: "Sac, çeşitli boylarda profil boruları ve daha fazlası...",
            button: "Ürünlerimiz",
            mainTitle1: "ANA DEPO",
            mainTitle2: "2 NO'LU DEPO",
            address1: "Adres: Şekerpınar, Ayça Sk. No:21, 41420 Çayırova/Kocaeli",
            address2: "Adres: 20 Damla Sokak, Çayırova/Kocaeli"
        }
    ],
    EN: [
        {
            servicesTitle: "OUR SERVICES",
            servicesSecondTitle: "Iron and Steel Products Marketing",
            servicesInfo1: "As a company, we purchase recycling materials, which are production residues from various industries, process them, and reintroduce them back into the industry.",
            servicesInfo2: "Sheet metal, profile pipes in various sizes and more...",
            button: "Our Products",
            mainTitle1: "MAIN DEPOT",
            mainTitle2: "DEPOT NO.2",
            address1: "Address: Şekerpınar, Ayça Sk. No:21, 41420 Çayırova/Kocaeli",
            address2: "Address: 20 Damla Sokak, Çayırova/Kocaeli"
        }
    ],
};

export const FooterData = {
    TR: [
        {
            title: "40 Yılı aşkın tecrübemizle!",
            content: "Demir, Çelik ve Metal ürünleri ticareti yaparak sektöre katkıda bulunuyoruz.",
            link: "Devamını Oku"
        },
        {
            title: "İletişim",
            content1: "Telefon: (0262) 658 13 60",
            content2: "Mail: info@acargeridonusum.com.tr",
            link: "Sosyal Medyadan bizi takip edin:"
        },
        {
            title: null,
            content: "Adresimize ulaşmak için:",
            link: null
        }
    ],
    EN: [
        {
            title: "With over 40 years of experience!",
            content: "We contribute to the sector by trading Iron, Steel and Metal products.",
            link: "Read More"
        },
        {
            title: "Contact",
            content1: "Phone: (0262) 658 13 60",
            content2: "E-Mail: info@acargeridonusum.com.tr",
            link: "Follow us in Social Media:"
        },
        {
            title: null,
            content: "To reach our address:",
            link: null
        }
    ],
};

//ComingSoon component; (temporary)
// export const ProductsData = {
//     TR: [
//         {
//             content1: "Detaylı ürünler sayfamız yakında sizlerle!",
//             content2: "Ürün stoklarımız hakkında bilgi almak için bizimle iletişime geçin:",
//         }
//     ],
//     EN: [
//         {
//             content1: "Our detailed products page will be here soon!",
//             content2: "Contact us for information about our product stocks:",
//         }
//     ]
// };

//TODO: data content düzeltilecek!
//TODO: EN - TR konfigürasyonu yapılacak!
export const ProductsData = {
    categories: [
        { id: "ray", name: "Ray Demiri" },
        { id: "levha", name: "Levha Sac" },
        { id: "celik", name: "Yuvarlak Çelik" },
        { id: "spiral", name: "Spiral Dikişli Boru" },
        { id: "cekmeBoru", name: "Çelik Çekme Boru" },
        { id: "makina", name: "Makina Ekipman" },
        { id: "profil", name: "Profil Demiri" },
        { id: "hadde", name: "Hadde Mamulleri" }
    ],
    products: {
        ray: [
            { 
                id: 1, 
                name: "Köşebent", 
                description: "Various type of metal",
                image: "/assets/01.jpg"
            },
            { 
                id: 2, 
                name: "Sac", 
                description: "Çeşitli boylarda sac",
                image: "/assets/01.jpg"
            },
            { 
                id: 3, 
                name: "Iron-1", 
                description: "Comfortable cotton",
                image: "/assets/01.jpg" 
            },
            { 
                id: 4, 
                name: "Iron-2", 
                description: "Stylish iron metal",
                image: "/assets/02.jpg" 
            },
            { 
                id: 5, 
                name: "Iron-1", 
                description: "Comfortable cotton",
                image: "/assets/03.jpg" 
            },
            { 
                id: 6, 
                name: "Iron-2", 
                description: "Stylish iron metal",
                image: "/assets/06.jpg" 
            },
            { 
                id: 1, 
                name: "Köşebent", 
                description: "Various type of metal",
                image: "/assets/07.jpg"
            },
            { 
                id: 2, 
                name: "Sac", 
                description: "Çeşitli boylarda sac",
                image: "/assets/08.jpg"
            }
        ],
        levha: [
            { 
                id: 1, 
                name: "Bakır", 
                description: "Comfortable type",
                image: "/assets/01.jpg" 
            },
            {   id: 2, 
                name: "Aliminyum", 
                description: "Versatile type",
                image: "/assets/01.jpg" 
            },
        ],
        celik: [
            { 
                id: 1, 
                name: "Iron-1", 
                description: "Comfortable cotton",
                image: "/assets/01.jpg" 
            },
            { 
                id: 2, 
                name: "Iron-2", 
                description: "Stylish iron metal",
                image: "/assets/01.jpg" 
            },
        ],
        spiral: [
            { 
                id: 1, 
                name: "Iron-1", 
                description: "Comfortable cotton",
                image: "/assets/01.jpg" 
            },
            { 
                id: 2, 
                name: "Iron-2", 
                description: "Stylish iron metal",
                image: "/assets/01.jpg" 
            },
        ],
        cekmeBoru: [
            { 
                id: 1, 
                name: "Iron-1", 
                description: "Comfortable cotton",
                image: "/assets/01.jpg" 
            },
            { 
                id: 2, 
                name: "Iron-2", 
                description: "Stylish iron metal",
                image: "/assets/01.jpg" 
            },
        ],
        makina: [
            { 
                id: 1, 
                name: "Iron-1", 
                description: "Comfortable cotton",
                image: "/assets/01.jpg" 
            },
            { 
                id: 2, 
                name: "Iron-2", 
                description: "Stylish iron metal",
                image: "/assets/01.jpg" 
            },
        ],
        profil: [
            { 
                id: 1, 
                name: "Iron-1", 
                description: "Comfortable cotton",
                image: "/assets/01.jpg" 
            },
            { 
                id: 2, 
                name: "Iron-2", 
                description: "Stylish iron metal",
                image: "/assets/01.jpg" 
            },
        ],
        hadde: [
            { 
                id: 1, 
                name: "Iron-1", 
                description: "Comfortable cotton",
                image: "/assets/03.jpg"
            },
            { 
                id: 2, 
                name: "Iron-2", 
                description: "Stylish iron metal",
                image: "/assets/02.jpg"
            },
        ]
    }
}

export const AboutUsData = {
    TR: [
        {
            title: "40 Yılı aşkın tecrübemizle!",
            content1: "Demir, Çelik ve Metal ürünleri ticareti yaparak sektöre katkıda bulunuyoruz.",
            content2: "1965 yılında babalarımızın başlatmış olduğu bu alanda, 2014 yılından itibaren Acar Geri Dönüşüm olarak devam ediyoruz.",
            content3: "Sektöre katkıda bulunmak açısından; bu zamana kadar edindiğimiz, babadan oğula geçen tecrübelerimizi kullanıyoruz.",
            content4: "Demir, çelik, metal, sac ve profil gibi ürünleri farklı birçok sanayi kolundan temin edip yurt içi ve yurt dışı ticaretini yapıyoruz.",
            content5: "Ticaretini yaptığımız ürünlerimiz çoğunlukla ağır sanayi mamulleri olup, 1 ve 2.kalite malzeme tedariği yapmaktayız.",
            content6: "Hem ihracat, hem de ithalat yaparak firma çizgimizi bozmadan yolumuzda ilerlemeye çalışıyoruz."
        },
    ],
    EN: [
        {
            title: "With over 40 years of experience!",
            content1: "We contribute to the sector by trading Iron, Steel and Metal products.",
            content2: "We have been continuing in this field, which was started by our fathers in 1965, as Acar Geri Dönüşüm since 2014.",
            content3: "In terms of contributing to the sector; We use the experiences we have gained so far, passed down from father to son.",
            content4: "We procure products such as iron, steel, metal, sheet metal and profile from many different industries with national and international trade.",
            content5: "The products we trade are mostly heavy industry products, and we supply 1st and 2nd quality materials.",
            content6: "We are trying to move forward on our way without breaking our company line by both exporting and importing."
        }
    ]
}

export const ContactData = {
    TR: [
        {
            click1: "WhatsApp için tıklayınız!",
            click2: "Mail için tıklayınız!",
            phone: "Ofis: (0262) 658 13 60"
        }
    ],
    EN: [
        {
            click1: "Click for WhatsApp!",
            click2: "Click for E-Mail!",
            phone: "Office: (0262) 658 13 60"
        }
    ]
}

export const PopupData = {
    TR: [
        {
            title: "Çalışma saatlerimiz",
            content1: "Pazar günleri kapalıyız!",
            content2: "Pazartesi",
            content3: "Salı",
            content4: "Çarşamba",
            content5: "Perşembe",
            content6: "Cuma",
            content7: "Cumartesi",
            hour: "09:00 - 18:00"
        }
    ],
    EN: [
        {
            title: "Our Working Hours",
            content1: "We are closed on Sundays!",
            content2: "Monday",
            content3: "Tuesday",
            content4: "Wednesday",
            content5: "Thursday",
            content6: "Friday",
            content7: "Saturday",
            hour: "9 AM - 6 PM"
        }
    ]
}