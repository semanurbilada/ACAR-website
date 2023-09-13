import 'swiper/css';
import "../css/swiper.css";
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { StateContext } from "../App.js";
import { Pagination, Autoplay } from "swiper";
import { HomeSwiperData } from '../services/data';
import { Swiper, SwiperSlide } from "swiper/react";

export default function HomeSwiper() {
    const { language } = useContext(StateContext);
    const swiperData = HomeSwiperData[language];

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
                <h1 className="text-primary-900 md:text-5xl text-2xl text-center">
                    {swiperData[0].content1}
                </h1>
            </SwiperSlide>

            <SwiperSlide className="bg-slide-2 bg-cover shadow-custom">
                <h2 className="text-white md:text-4xl text-2xl text-center">
                    {swiperData[1].content2}
                </h2>
            </SwiperSlide>

            <SwiperSlide className="bg-slide-3 bg-cover shadow-custom">
                <h2 className="text-white md:text-4xl text-2xl text-center">
                    {swiperData[2].content3}
                </h2>
            </SwiperSlide>

            <SwiperSlide className="bg-slide-4 bg-cover shadow-custom">
                <h2 className="text-white md:text-4xl text-2xl sm:text-center text-start">
                    {swiperData[3].content4}
                </h2>

                <Link 
                    className="base-button -mt-4 w-auto text-gray-50 hover:bg-primary-700 hover:text-gray-50 md:text-base text-sm shadow-xl" 
                    to="/products"
                >
                    {swiperData[4].button}
                </Link>
            </SwiperSlide>
        </Swiper>
    );
}