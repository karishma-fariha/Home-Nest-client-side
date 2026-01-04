import React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowUpRight, Building2 } from "lucide-react";
import building4 from '../assets/istockphoto-4.jpg';
import building3 from '../assets/banani-2978376_1280.jpg';
import building2 from '../assets/building-4341311_1280.jpg';
import building from '../assets/architecture-7740616_1280.jpg';

const CityHighlights = () => {
    // We add a 'gridSpan' property to create the Bento effect
    const data = [
        { title: "Gulshan", subtitle: "10 Properties", img: building2, gridSpan: "md:col-span-2 md:row-span-2" },
        { title: "Banani", subtitle: "21 Properties", img: building, gridSpan: "md:col-span-2 md:row-span-1" },
        { title: "Mirpur", subtitle: "14 Properties", img: building3, gridSpan: "md:col-span-1 md:row-span-1" },
        { title: "Uttara", subtitle: "31 Properties", img: building4, gridSpan: "md:col-span-1 md:row-span-1" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section className="py-24 px-6 lg:px-24 bg-base-100">
            <div className="max-w-7xl mx-auto">
                {/* --- HEADER --- */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-primary"></span>
                            <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">Neighborhoods</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-secondary">
                            Premier <span className="text-primary">Destinations</span>
                        </h2>
                    </div>
                    <p className="max-w-md text-base-content/50 font-medium leading-relaxed">
                        Explore exclusive listings in the most sought-after urban centers. 
                        Hand-picked locations for your next chapter.
                    </p>
                </div>

                {/* --- BENTO GRID --- */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[750px]"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {data.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`relative overflow-hidden rounded-[2.5rem] group cursor-pointer border border-base-300 ${item.gridSpan}`}
                        >
                            {/* Image with Zoom */}
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />

                            {/* Dynamic Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Top Badge: Glassmorphism */}
                            <div className="absolute top-6 left-6 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                <div className="backdrop-blur-md bg-white/10 border border-white/20 px-4 py-2 rounded-2xl flex items-center gap-2 text-white shadow-xl">
                                    <Building2 size={14} className="text-primary" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest">{item.subtitle}</span>
                                </div>
                            </div>

                            {/* Bottom Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                                <div className="flex items-end justify-between">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <MapPin size={16} />
                                            <span className="text-[10px] font-black uppercase tracking-widest">Explore Area</span>
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter">
                                            {item.title}
                                        </h3>
                                    </div>
                                    
                                    {/* Action Circle */}
                                    <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 shadow-lg">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CityHighlights;