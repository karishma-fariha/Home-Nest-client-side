import React from "react";
import { motion } from "framer-motion";
import { 
    CheckCircle2, Eye, Lock, Smartphone, 
    Users, TrendingUp, ArrowRight, ShieldCheck, 
    Sparkles, Target, Landmark
} from "lucide-react";
import { Link } from "react-router";
import girlImg from '../assets/Gemini_Generated_Image_bywmwkbywmwkbywm-removebg-preview.png';
import RelaxIMG from '../assets/relaxingImg.png';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const About = () => {
    return (
        <main className="bg-base-100 text-base-content overflow-x-hidden">
            
            {/* --- HERO SECTION --- */}
            <section className="relative pt-24 pb-16 px-6 lg:px-24">
                {/* Modern Blur Background Accents */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -z-10"></div>
                
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        className="lg:w-1/2 text-left"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-6">
                            <Sparkles size={16} />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">The Future of Realty</span>
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] mb-8">
                            Redefining the way you find <span className="text-primary underline decoration-base-300 underline-offset-8">Home.</span>
                        </h1>
                        
                        <p className="text-xl text-base-content/60 leading-relaxed mb-10 max-w-xl">
                            We bridge the gap between property owners and seekers through a 
                            transparent, data-driven digital ecosystem. No more guesswork—just 
                            simple, reliable real estate.
                        </p>
                        
                        <div className="flex flex-wrap gap-4">
                            <Link to="/allProperties" className="btn btn-primary btn-lg rounded-2xl px-10 shadow-xl shadow-primary/20 group">
                                Browse Listings <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/contact" className="btn btn-ghost btn-lg rounded-2xl px-8 border-base-300">
                                Contact Support
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        className="lg:w-1/2 relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] bg-gradient-to-b from-primary/5 to-transparent p-4">
                            <img src={girlImg} alt="HomeNest Experience" className="w-full h-auto object-cover rounded-[2.5rem]" />
                        </div>
                        {/* Decorative floating card */}
                        <div className="absolute -bottom-10 -left-10 bg-base-100 p-6 rounded-3xl shadow-2xl border border-base-200 hidden md:block animate-bounce-slow">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-success/10 text-success rounded-xl"><ShieldCheck /></div>
                                <div>
                                    <p className="text-xs font-bold opacity-40 uppercase tracking-widest">Trust Rating</p>
                                    <p className="text-lg font-black">99.2% Verified</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- NEUTRAL STATS BAR --- */}
            <section className="bg-neutral py-16">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {[
                        { val: "12k+", label: "Active Listings" },
                        { val: "8k+", label: "Happy Families" },
                        { val: "99%", label: "Verified Owners" },
                        { val: "24/7", label: "Client Support" },
                    ].map((stat, i) => (
                        <div key={i} className="group">
                            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-2 group-hover:text-primary transition-colors">
                                {stat.val}
                            </h3>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- WHY TRUST SECTION --- */}
            <section className="py-24 px-6 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div className="max-w-xl">
                            <h2 className="text-4xl font-black tracking-tight mb-4">Why Trust HomeNest?</h2>
                            <p className="text-base-content/50 font-medium">We built our reputation on three pillars: Safety, Transparency, and Ease of Use.</p>
                        </div>
                        <div className="h-px flex-1 bg-base-300 mx-8 hidden lg:block mb-4"></div>
                    </div>

                    <motion.div
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {[
                            { icon: <CheckCircle2 />, title: "Verified Listings", desc: "Every property is manually checked for accuracy and genuine ownership." },
                            { icon: <Eye />, title: "Full Transparency", desc: "No hidden fees or obscured details. What you see is exactly what you get." },
                            { icon: <Lock />, title: "Data Security", desc: "Your personal information is encrypted with industry-standard protocols." },
                            { icon: <Smartphone />, title: "Mobile First", desc: "Optimized for the on-the-go seeker. Browse comfortably from any device." },
                            { icon: <Users />, title: "Expert Support", desc: "Our team of experts is always ready to guide you through the process." },
                            { icon: <TrendingUp />, title: "Market Insights", desc: "Access real-time pricing trends and data to make smart decisions." },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUp}
                                whileHover={{ y: -10 }}
                                className="p-10 bg-base-200/40 hover:bg-base-100 border border-transparent hover:border-primary/20 transition-all rounded-[2.5rem] group"
                            >
                                <div className="w-14 h-14 bg-base-100 rounded-2xl flex items-center justify-center text-primary mb-8 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    {React.cloneElement(item.icon, { size: 28 })}
                                </div>
                                <h4 className="font-bold text-xl mb-4 tracking-tight">{item.title}</h4>
                                <p className="text-sm leading-relaxed opacity-60 font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* --- MISSION & VISION (Editorial Style) --- */}
            <section className="py-24 bg-base-200/50">
                <div className="max-w-7xl mx-auto px-6 lg:px-24 grid md:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="relative"
                    >
                        <img src={RelaxIMG} alt="The Nest Experience" className="rounded-[3rem] shadow-2xl relative z-10" />
                        <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary rounded-[3rem] -z-0"></div>
                    </motion.div>

                    <div className="space-y-16">
                        <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center"><Target size={24} /></div>
                                <h3 className="text-3xl font-black tracking-tight">Our Mission</h3>
                            </div>
                            <p className="text-lg leading-relaxed text-base-content/70">
                                To simplify the property journey by delivering a user-centric platform 
                                where technology meets trust. We empower seekers with tools that 
                                turn "searching" into "finding."
                            </p>
                        </motion.div>

                        <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-secondary text-white rounded-xl flex items-center justify-center"><Landmark size={24} /></div>
                                <h3 className="text-3xl font-black tracking-tight">Our Vision</h3>
                            </div>
                            <p className="text-lg leading-relaxed text-base-content/70">
                                To become the world's most trusted real estate companion, setting 
                                the standard for transparency and accessibility in the digital 
                                property market.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- FINAL CTA BANNER --- */}
            <section className="py-24 px-6 text-center">
                <motion.div
                    className="max-w-5xl mx-auto bg-neutral p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none">
                        <div className="grid grid-cols-8 gap-4 rotate-12 scale-150">
                            {[...Array(64)].map((_, i) => (
                                <div key={i} className="w-8 h-8 border border-white rounded-md"></div>
                            ))}
                        </div>
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">
                            Your journey to a better <br /> home starts here.
                        </h2>
                        <p className="text-lg opacity-60 mb-12 max-w-xl mx-auto font-medium">
                            Join over 12,000+ families who have found their sanctuary through our platform.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button className="btn btn-primary btn-wide h-16 rounded-2xl font-bold uppercase tracking-widest text-xs">
                                Create Free Account
                            </button>
                            <button className="btn btn-outline btn-white btn-wide h-16 rounded-2xl font-bold uppercase tracking-widest text-xs border-white/20 hover:bg-white/10 text-white">
                                Talk to an Expert
                            </button>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
};

export default About;