import React from 'react';
import { Target, Heart, ShieldCheck, Zap, ArrowRight, Award, Users } from "lucide-react";
import { Link } from "react-router";

const OurStory = () => {
    const values = [
        {
            icon: <ShieldCheck className="text-primary" size={28} />,
            title: "Uncompromising Trust",
            desc: "Every listing is verified by our team to ensure the highest security standards for your investment."
        },
        {
            icon: <Zap className="text-orange-500" size={28} />,
            title: "Swift Innovation",
            desc: "We use AI-driven data to provide real-time market valuations and lightning-fast transaction processing."
        },
        {
            icon: <Heart className="text-error" size={28} />,
            title: "Community First",
            desc: "We don't just sell houses; we build neighborhoods. A portion of every sale goes to local housing initiatives."
        }
    ];

    return (
        <div className="bg-base-100 overflow-hidden">
            
            {/* --- SECTION 1: THE NARRATIVE --- */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        {/* Decorative background element */}
                        <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                        
                        <h4 className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4">Our Journey</h4>
                        <h2 className="text-5xl font-black tracking-tighter leading-[1.1] mb-8">
                            Redefining the way you find <span className="text-primary">Home.</span>
                        </h2>
                        <div className="space-y-6 text-base-content/70 leading-relaxed text-lg">
                            <p>
                                Founded in 2018, **HomeNest** started with a simple observation: the real estate market was fragmented, opaque, and difficult to navigate. We believed that finding a home should be as inspiring as living in one.
                            </p>
                            <p>
                                What began as a small team of three developers and a real estate agent has grown into a global platform. We've combined cutting-edge technology with deep human empathy to create a marketplace that puts the user—not the commission—first.
                            </p>
                        </div>
                        
                        <div className="mt-10 flex flex-wrap gap-4">
                            <Link to="/properties" className="btn btn-primary rounded-2xl px-8 gap-2 group">
                                Explore Listings <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <div className="flex items-center gap-3 px-4 py-2 bg-base-200 rounded-2xl border border-base-300">
                                <Award className="text-primary" size={20} />
                                <span className="text-sm font-bold uppercase tracking-tight">Voted #1 Platform 2025</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        {/* Image Grid Style */}
                        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/20 transform group-hover:scale-[1.02] transition-transform duration-700">
                            <img 
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000" 
                                alt="Modern Architecture" 
                                className="w-full h-[600px] object-cover"
                            />
                        </div>
                        {/* Experience Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-neutral text-neutral-content p-8 rounded-[2rem] shadow-2xl z-20 hidden md:block border border-white/10">
                            <p className="text-4xl font-black text-primary">8+</p>
                            <p className="text-xs font-bold uppercase tracking-widest opacity-60">Years of Experience</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SECTION 2: STATS COUNTER --- */}
            <section className="bg-neutral py-20">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {[
                        { val: "12K+", label: "Happy Families", icon: <Users size={20}/> },
                        { val: "$4B+", label: "Property Value", icon: <Target size={20}/> },
                        { val: "250+", label: "Global Cities", icon: <Zap size={20}/> },
                        { val: "99%", label: "Trust Score", icon: <ShieldCheck size={20}/> },
                    ].map((stat, i) => (
                        <div key={i} className="space-y-2 group">
                            <div className="flex justify-center text-primary mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                {stat.icon}
                            </div>
                            <h3 className="text-4xl font-black text-white tracking-tighter">{stat.val}</h3>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- SECTION 3: CORE VALUES --- */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black tracking-tight mb-4">Our Core Principles</h2>
                    <p className="text-base-content/50 max-w-lg mx-auto">The values that drive our team every day to provide the best service in the industry.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((v, i) => (
                        <div key={i} className="bg-base-200 p-10 rounded-[2.5rem] border border-transparent hover:border-primary/20 hover:bg-base-100 hover:shadow-2xl transition-all duration-500 group">
                            <div className="w-16 h-16 bg-base-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                {v.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                            <p className="text-base-content/60 leading-relaxed text-sm">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default OurStory;