import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import handshake from '../assets/Real estate agent handover.jpg';
import apartment from '../assets/Modern apartment interior.jpg';
import agent from '../assets/Person searching homes online.jpg'

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const BannerSlider = () => {
    return (
        <div className=''>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop={true}
                className="h-[400px] md:h-[550px]"
            >
                <SwiperSlide>
                    {/* Slide 1 content */}
                    <div className="relative w-full h-full">
                        <img
                            src={apartment}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center border-2">
                            <h2 className="text-3xl md:text-5xl font-bold mb-3 drop-shadow-lg">Find Your Perfect Home</h2>
                            <p className="max-w-xl text-lg">Discover verified properties near you</p>
                            <button className="mt-4 bg-white/20 px-4 py-1 rounded-full text-sm backdrop-blur-sm">Explore Now</button>
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    {/* Slide 2 content */}
                     <div className="relative w-full h-full">
                        <img
                            src={handshake}
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center border-2">
                            <h2 className="text-3xl md:text-5xl font-bold mb-3 drop-shadow-lg">Trusted Listings From Verified Owners</h2>
                            <p className="max-w-xl text-lg">Every property on HomeNest is reviewed for accuracy and reliability.</p>
                            <button className="mt-4 bg-white/20 px-4 py-1 rounded-full text-sm backdrop-blur-sm">Browse Trusted Homes</button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    {/* Slide 3 content */}
                     <div className="relative w-full h-full">
                        <img
                            src={agent}
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center border-2">
                            <h2 className="text-3xl md:text-5xl font-bold mb-3 drop-shadow-lg">Find Homes Faster With Smart Search</h2>
                            <p className="max-w-xl text-lg">Filter by location, budget, and property type in seconds.</p>
                            <button className="mt-4 bg-white/20 px-4 py-1 rounded-full text-sm backdrop-blur-sm"> Start Searching</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default BannerSlider;