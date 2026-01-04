import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import handshake from '../assets/happy-family-with-dog-moving-new-home.jpg';
import apartment from '../assets/Modern apartment interior.jpg';
import agent from "../assets/side-view-woman-holding-laptop.jpg"

const BannerSlider = () => {
    const slideUp = {
        hidden: { y: "100%", opacity: 0 },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1, 
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
            }
        })
    };

    const slides = [
        {
            img: apartment,
            tag: "Premium Properties",
            title: "Find Your Perfect",
            highlight: "Living Space",
            subtitle: "Luxury apartments and villas in the heart of the city.",
            cta: "Browse All"
        },
        {
            img: handshake,
            tag: "Verified Listings",
            title: "Connect with the",
            highlight: "Top Agents",
            subtitle: "Negotiate with confidence through our verified network.",
            cta: "View Agents"
        },
        {
            img: agent,
            tag: "Smart Search",
            title: "Your Dream Home",
            highlight: "Is One Click Away",
            subtitle: "Advanced filtering to match your budget and lifestyle.",
            cta: "Start Search"
        }
    ];

    return (
        <div className="w-full h-[500px] md:h-[750px] bg-secondary overflow-hidden">
            <Swiper
                modules={[Autoplay, EffectFade, Pagination, Navigation]}
                effect="fade"
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 6000 }}
                loop={true}
                className="h-full w-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full flex items-center">
                            
                            <img
                                src={slide.img}
                                className="absolute inset-0 w-full h-full object-cover brightness-50"
                                alt="banner"
                            />
                            
                            <div className="absolute inset-0 bg-linear-to-r from-secondary/70 via-secondary/20 to-transparent" />

                            <div className="container mx-auto px-6 md:px-16 z-10">
                                <div className="max-w-3xl">
                                    <div className="overflow-hidden mb-4">
                                        <motion.span 
                                            custom={0}
                                            variants={slideUp}
                                            initial="hidden"
                                            whileInView="visible"
                                            className="text-accent font-bold tracking-[0.2em] uppercase text-sm border-l-2 border-accent pl-4"
                                        >
                                            {slide.tag}
                                        </motion.span>
                                    </div>
                                    <div className="overflow-hidden">
                                        <motion.h1 
                                            custom={1}
                                            variants={slideUp}
                                            initial="hidden"
                                            whileInView="visible"
                                            className="text-4xl md:text-7xl font-black text-white leading-[1.1]"
                                        >
                                            {slide.title} <br />
                                            <span className="text-accent underline decoration-primary underline-offset-8">
                                                {slide.highlight}
                                            </span>
                                        </motion.h1>
                                    </div>
                                    <div className="overflow-hidden mt-6">
                                        <motion.p 
                                            custom={2}
                                            variants={slideUp}
                                            initial="hidden"
                                            whileInView="visible"
                                            className="text-lg md:text-xl text-white/70 max-w-xl font-light"
                                        >
                                            {slide.subtitle}
                                        </motion.p>
                                    </div>
                                    <div className="overflow-hidden mt-10">
                                        <motion.div 
                                            custom={3}
                                            variants={slideUp}
                                            initial="hidden"
                                            whileInView="visible"
                                        >
                                            <button className="btn btn-primary hover:bg-accent px-10 py-4 transition-all duration-300 shadow-xl shadow-black/20 font-bold">
                                                {slide.cta}
                                            </button>
                                        </motion.div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <style jsx global>{`
                .swiper-button-next, .swiper-button-prev { color: white !important; transform: scale(0.7); }
                .swiper-pagination-bullet-active { background: var(--color-accent) !important; }
            `}</style>
        </div>
    );
};

export default BannerSlider;