import React from "react";
import { motion } from "framer-motion";
import { 
    Mail, Phone, MapPin, Send, Clock, 
    CheckCircle2, ShieldCheck, Globe, MessageSquare, 
    ArrowRight, UserCheck
} from "lucide-react";

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

const ContactUs = () => {
    return (
        <main className="bg-base-100 text-base-content min-h-screen">
            {/* --- HERO HEADER --- */}
            <section className="relative py-24 px-6 lg:px-24 bg-neutral text-neutral-content overflow-hidden">
                {/* Background Decorative Glows */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -mr-64 -mt-64"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/10 blur-[100px] rounded-full -ml-32 -mb-32"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="flex flex-col items-center text-center"
                    >
                        <div className="badge badge-primary badge-outline mb-6 px-4 py-3 font-bold uppercase tracking-[0.2em] text-[10px]">
                            Connect with HomeNest
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                            How can we help you <br /> find your <span className="text-primary">next nest?</span>
                        </h1>
                        <p className="max-w-2xl text-lg opacity-60 leading-relaxed font-medium">
                            Our global support team is ready to assist with property valuations, 
                            technical support, or helping you list your first home.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- CONTACT INFO GRID --- */}
            <section className="py-20 px-6 lg:px-24 -mt-16 relative z-20">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {[
                            { icon: <Mail />, title: "Email Support", detail: "help@homenest.com", sub: "Response in 12h", color: "bg-blue-500/10 text-blue-500" },
                            { icon: <Phone />, title: "Direct Line", detail: "+1 (555) 888-NEST", sub: "Available 24/7", color: "bg-green-500/10 text-green-500" },
                            { icon: <MapPin />, title: "HQ Office", detail: "Manhattan, NY", sub: "123 Realty Tower", color: "bg-purple-500/10 text-purple-500" },
                            { icon: <Globe />, title: "Global Network", detail: "25+ Countries", sub: "Localized Support", color: "bg-orange-500/10 text-orange-500" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUp}
                                whileHover={{ y: -8 }}
                                className="p-8 bg-base-100 border border-base-300 rounded-[2.5rem] shadow-xl shadow-base-300/20 group transition-all"
                            >
                                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    {React.cloneElement(item.icon, { size: 24 })}
                                </div>
                                <h4 className="font-black text-lg mb-1">{item.title}</h4>
                                <p className="font-bold text-primary text-sm">{item.detail}</p>
                                <p className="text-[10px] font-bold uppercase opacity-40 mt-3 tracking-widest">{item.sub}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* --- MAIN INTERACTION AREA --- */}
            <section className="py-20 px-6 lg:px-24">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
                    
                    {/* Form Column */}
                    <motion.div
                        className="lg:w-3/5"
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="bg-base-200/50 p-10 rounded-[3rem] border border-base-300 shadow-sm relative overflow-hidden">
                            <MessageSquare size={150} className="absolute -right-10 -top-10 text-primary opacity-[0.03] pointer-events-none" />
                            
                            <h3 className="text-3xl font-black tracking-tight mb-8">Send an Inquiry</h3>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase opacity-50 ml-2">Full Name</label>
                                        <input type="text" placeholder="John Doe" className="input input-bordered w-full rounded-2xl bg-base-100 focus:outline-primary/30 h-14" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase opacity-50 ml-2">Email Address</label>
                                        <input type="email" placeholder="john@example.com" className="input input-bordered w-full rounded-2xl bg-base-100 focus:outline-primary/30 h-14" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase opacity-50 ml-2">Subject</label>
                                    <select className="select select-bordered w-full rounded-2xl bg-base-100 h-14">
                                        <option>General Inquiry</option>
                                        <option>Property Valuation</option>
                                        <option>Technical Issue</option>
                                        <option>Partnership</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase opacity-50 ml-2">Message</label>
                                    <textarea placeholder="Describe your needs..." className="textarea textarea-bordered w-full h-40 rounded-3xl bg-base-100 focus:outline-primary/30 p-5"></textarea>
                                </div>
                                <button className="btn btn-primary btn-block h-16 rounded-2xl shadow-lg shadow-primary/20 gap-3 group">
                                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    <span className="font-bold tracking-widest uppercase text-xs">Dispatch Message</span>
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Sidebar / Info Column */}
                    <motion.div
                        className="lg:w-2/5 flex flex-col gap-8"
                        initial={{ x: 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        {/* Support Expert Card */}
                        <div className="bg-neutral text-neutral-content p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <ShieldCheck size={80} />
                            </div>
                            
                            <div className="flex items-center gap-4 mb-8">
                                <div className="avatar">
                                    <div className="w-16 h-16 rounded-2xl ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200" alt="Support Lead" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold">Sarah Jenkins</h4>
                                    <p className="text-xs opacity-50">Head of Customer Success</p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-black mb-6 leading-tight">Expert assistance for every step.</h2>
                            <ul className="space-y-5">
                                {[
                                    "Personalized property matching",
                                    "Legal assistance for first-time buyers",
                                    "Technical platform troubleshooting",
                                ].map((text, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm font-medium opacity-80">
                                        <UserCheck className="text-primary shrink-0" size={18} />
                                        {text}
                                    </li>
                                ))}
                            </ul>

                            <button className="btn btn-ghost btn-block mt-10 rounded-xl border-white/10 hover:bg-white/5 gap-3">
                                View Help Center <ArrowRight size={16} />
                            </button>
                        </div>

                        {/* Fast Response Guarantee */}
                        <div className="p-8 rounded-[2.5rem] border-2 border-dashed border-base-300 flex items-center gap-6">
                            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                                <Clock size={28} />
                            </div>
                            <div>
                                <h4 className="font-black">Fast Response</h4>
                                <p className="text-xs opacity-50 font-medium">We typically reply within <span className="text-primary font-bold">2 hours</span> during business days.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default ContactUs;