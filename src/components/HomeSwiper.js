import 'swiper/css';
import "../css/swiper.css";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HomeSwiper() {
    return(
        <Swiper 
            className="w-full shadow-2xl z-30"
            loop={true}
            direction={"horizontal"}
            spaceBetween={0}
            modules={[ Pagination, Autoplay ]}
            pagination={{ clickable: true }}
            navigation
            slidesPerView={1}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
        >
            <SwiperSlide className="bg-slide-1 bg-fixed bg-cover shadow-custom">
                <h1 className="text-primary-900  md:text-5xl text-2xl font-bold text-center">
                    Demir, Çelik Sektörünün en köklülerinden!
                </h1>
            </SwiperSlide>

            <SwiperSlide className="bg-slide-2 bg-cover shadow-custom">
                <h2 className="text-white md:text-4xl text-2xl font-bold text-center">
                    Kaliteli Demir, Çelik ve Metal için doğru adres!
                </h2>
            </SwiperSlide>

            <SwiperSlide className="bg-slide-3 bg-cover shadow-custom">
                <h2 className="text-white md:text-4xl text-2xl font-bold text-center">
                    Sektörün lideri olarak Demir, Çelik ve Metal Geri Dönüşümüne katkıda bulunuyoruz!
                </h2>
            </SwiperSlide>
        </Swiper>
    );
}