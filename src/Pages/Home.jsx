import React, { useEffect, useState } from 'react';
import BannerSlider from '../Components/BannerSlider';
import FeaturedEstates from '../Components/FeaturedEstates';
import WhyChoose from '../Components/WhyChoose';
import HowItWork from '../Components/HowItWork';
import CityHighlights from '../Components/CityHighlights';
import { Link } from 'react-router';
import { ArrowRight, Sparkles } from 'lucide-react';

const Home = () => {
    const [estates, setEstates] = useState([]);
    useEffect(() => {
        fetch(`https://home-nest-server-side.vercel.app/properties/home`)
            .then(res => res.json())
            .then(data => setEstates(data))
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <div>

            <section>
                <BannerSlider></BannerSlider>
            </section>
            {/* --- FEATURED REAL ESTATE SECTION --- */}
            <section className="py-24 px-6 lg:px-24 bg-base-100 relative overflow-hidden">
                {/* Subtle Background Glow for depth */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -mr-64 -mt-64"></div>

                <div className="max-w-7xl mx-auto relative z-10">

                    {/* --- HEADER --- */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-6">
                            <Sparkles size={16} />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Hand-Picked for You</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-secondary mb-6">
                            Featured <span className="text-primary">Real Estate</span>
                        </h2>
                        <p className="text-lg text-base-content/50 max-w-2xl mx-auto font-medium">
                            Explore our exclusive collection of top-tier properties, each verified for
                            quality and value by our expert team.
                        </p>
                    </div>

                    {/* --- GRID COMPONENT --- */}
                    <div className="transition-all duration-500">
                        <FeaturedEstates estates={estates} />
                    </div>

                    {/* --- FOOTER CTA --- */}
                    <div className="flex flex-col items-center justify-center mt-16 gap-6">
                        <Link
                            className="btn btn-primary btn-lg rounded-2xl px-12 shadow-xl shadow-primary/20 group gap-3"
                            to="/allProperties"
                        >
                            <span className="font-bold tracking-widest uppercase text-xs">Browse All Listings</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>

                        {/* Visual Social Proof */}
                        <div className="flex items-center gap-2 opacity-30">
                            <div className="h-[1] w-8 bg-base-content"></div>
                            <span className="text-[10px] font-bold uppercase tracking-widest">70+ Properties available</span>
                            <div className="h-[1] w-8 bg-base-content"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <WhyChoose></WhyChoose>
            </section>
            <section>
                <HowItWork></HowItWork>
            </section>

            <section>
                <CityHighlights></CityHighlights>
            </section>

        </div>
    );
};

export default Home;