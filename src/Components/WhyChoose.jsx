import React from 'react';
import { motion } from 'framer-motion';
import { 
    ShieldCheck, 
    SearchCode, 
    BadgePercent, 
    LockKeyhole, 
    Headset, 
    Zap,
    Sparkles 
} from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const WhyChoose = () => {
    const reasons = [
        {
            icon: <ShieldCheck size={32} />,
            title: "Verified Listings",
            desc: "Every property undergoes a 20-point verification process to ensure 100% authenticity.",
            accent: "text-blue-500",
            bg: "bg-blue-500/10"
        },
        {
            icon: <SearchCode size={32} />,
            title: "Smart Filtering",
            desc: "Our AI-driven search helps you find the perfect match based on your lifestyle and budget.",
            accent: "text-purple-500",
            bg: "bg-purple-500/10"
        },
        {
            icon: <BadgePercent size={32} />,
            title: "Best Price Promise",
            desc: "Direct-from-owner listings and market analytics ensure you never overpay for your nest.",
            accent: "text-emerald-500",
            bg: "bg-emerald-500/10"
        },
        {
            icon: <LockKeyhole size={32} />,
            title: "Secure Privacy",
            desc: "End-to-end encrypted communication ensures your personal data stays between you and the owner.",
            accent: "text-orange-500",
            bg: "bg-orange-500/10"
        },
        {
            icon: <Headset size={32} />,
            title: "Expert Guidance",
            desc: "Our dedicated relationship managers are available 24/7 to guide your site visits.",
            accent: "text-pink-500",
            bg: "bg-pink-500/10"
        },
        {
            icon: <Zap size={32} />,
            title: "Instant Alerts",
            desc: "Be the first to know. Get real-time notifications for price drops and new area listings.",
            accent: "text-yellow-500",
            bg: "bg-yellow-500/10"
        }
    ];

    return (
        <section className="px-6 lg:px-24 bg-base-100 relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent -z-0"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* --- HEADER --- */}
                <div className="text-center mb-20">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full mb-6"
                    >
                        <Sparkles size={14} />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">The HomeNest Advantage</span>
                    </motion.div>
                    
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-secondary mb-6">
                        Why Choose <span className="text-primary">HomeNest</span>?
                    </h2>
                    <p className="text-lg text-base-content/50 max-w-2xl mx-auto font-medium leading-relaxed">
                        We don't just list properties; we curate experiences. Discover why thousands 
                        of families trust us for their most important journey.
                    </p>
                </div>

                {/* --- FEATURES GRID --- */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {reasons.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            whileHover={{ y: -8 }}
                            className="group p-8 rounded-[2.5rem] bg-base-200/40 border border-transparent hover:border-primary/20 hover:bg-base-100 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-primary/5"
                        >
                            {/* Icon Container */}
                            <div className={`w-16 h-16 rounded-2xl ${item.bg} ${item.accent} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                                {item.icon}
                            </div>

                            <h3 className="text-2xl font-black tracking-tight mb-4 group-hover:text-primary transition-colors">
                                {item.title}
                            </h3>
                            
                            <p className="text-base-content/60 leading-relaxed font-medium mb-6">
                                {item.desc}
                            </p>

                            {/* Decorative Line */}
                            <div className="w-12 h-1 bg-base-300 rounded-full group-hover:w-full group-hover:bg-primary transition-all duration-700"></div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* --- FOOTER BADGE --- */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 pt-10 border-t border-base-200 flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all"
                >
                    {["ISO Certified", "Secure Payments", "256-bit Encryption", "Verified Owners"].map((badge, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                            <span className="text-[10px] font-black uppercase tracking-widest">{badge}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChoose;