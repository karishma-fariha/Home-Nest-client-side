import React from 'react';
import { motion } from 'framer-motion';
import { 
    Search, 
    Headset, 
    CreditCard, 
    ArrowRight, 
    CheckCircle2,
    Sparkles
} from 'lucide-react';
import homeImg from '../assets/real-estate-6688945_1280.jpg';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HowItWork = () => {
    const steps = [
        {
            icon: <Search className="text-primary" size={28} />,
            title: "Find Your Nest",
            desc: "Browse through thousands of verified listings with advanced filters to find exactly what you're looking for.",
            color: "bg-primary/10"
        },
        {
            icon: <Headset className="text-secondary" size={28} />,
            title: "Expert Consultation",
            desc: "Connect instantly with our certified agents. Ask questions, request virtual tours, and get expert market advice.",
            color: "bg-secondary/10"
        },
        {
            icon: <CreditCard className="text-accent" size={28} />,
            title: "Secure the Deal",
            desc: "Complete your paperwork and payments through our encrypted gateway. Transparent, fast, and 100% digital.",
            color: "bg-accent/10"
        }
    ];

    return (
        <section className="py-24 px-6 lg:px-24 bg-base-100 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                
                {/* --- HEADER --- */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-base-200 rounded-full mb-4">
                        <Sparkles size={16} className="text-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-70">The HomeNest Process</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-secondary mb-6">
                        How it <span className="text-primary">Works</span>
                    </h2>
                    <p className="text-lg text-base-content/50 max-w-2xl mx-auto font-medium">
                        We’ve simplified the property journey into three effortless steps, 
                        designed to get you into your new home faster.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    
                    {/* --- LEFT: THE STEPS --- */}
                    <div className="lg:w-1/2 space-y-12 relative">
                        {/* Vertical Connector Line (Desktop Only) */}
                        <div className="absolute left-[31px] top-10 bottom-10 w-[2px] bg-gradient-to-b from-primary via-secondary to-accent opacity-20 hidden md:block"></div>

                        {steps.map((step, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="flex gap-8 relative group"
                            >
                                {/* Step Number/Icon Circle */}
                                <div className={`relative z-10 w-16 h-16 shrink-0 rounded-2xl ${step.color} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                                    {step.icon}
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white dark:bg-neutral rounded-full flex items-center justify-center text-[10px] font-black border border-base-300 shadow-sm">
                                        0{index + 1}
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <h3 className="text-2xl font-black tracking-tight mb-3 group-hover:text-primary transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-base-content/60 leading-relaxed font-medium">
                                        {step.desc}
                                    </p>
                                    <div className="mt-4 flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                                        Learn More <ArrowRight size={14} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* --- RIGHT: THE IMAGE FRAME --- */}
                    <motion.div 
                        className="lg:w-1/2 relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Decorative Shapes */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -z-10"></div>

                        <div className="relative rounded-[3.5rem] overflow-hidden border-[12px] border-base-200 shadow-2xl">
                            <img 
                                src={homeImg} 
                                alt="Modern Property" 
                                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-1000"
                            />
                            
                            {/* Floating "Relatable" Card */}
                            <div className="absolute bottom-8 left-8 right-8 backdrop-blur-xl bg-white/80 dark:bg-neutral/80 p-6 rounded-[2rem] border border-white/20 shadow-2xl">
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-3">
                                        {[1,2,3].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-base-300 overflow-hidden">
                                                <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-tight">Trusted by Thousands</p>
                                        <div className="flex items-center gap-1 text-orange-500">
                                            {[...Array(5)].map((_, i) => <CheckCircle2 key={i} size={12} fill="currentColor" />)}
                                            <span className="text-[10px] font-bold text-base-content ml-1">4.9/5 Rating</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default HowItWork;