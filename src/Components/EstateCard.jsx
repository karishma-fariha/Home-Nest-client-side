import React from 'react';
import { Link } from 'react-router';
import { MapPin, BedDouble, Bath, Square, ArrowRight } from 'lucide-react'; // Using lucide-react for icons

const EstateCard = ({ estate }) => {
    const { image, title, location, price, category, short_description, _id,bath,bed,size } = estate;

    return (
        <div className="group bg-base-100 border border-base-300 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col h-full">
            
            <div className="relative overflow-hidden h-60">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                <div className="absolute top-4 left-4">
                    <span className="badge badge-accent font-bold px-4 py-3 shadow-lg uppercase text-[10px] tracking-widest">
                        {category}
                    </span>
                </div>

                <div className="absolute bottom-4 left-4">
                    <div className="bg-white/90 dark:bg-neutral/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-md">
                        <p className="text-primary font-black text-lg">
                            ৳ {price.toLocaleString()}
                        </p>
                    </div>
                </div>
            </div>

            <div className="p-5 flex flex-col grow">
                <h2 className="text-xl font-bold text-base-content group-hover:text-primary transition-colors line-clamp-1">
                    {title}
                </h2>

                <div className="flex items-center gap-1 text-base-content/60 mt-2">
                    <MapPin size={16} className="text-accent" />
                    <p className="text-sm font-medium">{location}</p>
                </div>

                <p className="text-base-content/70 mt-4 text-sm line-clamp-2 leading-relaxed">
                    {short_description}
                </p>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-base-300 text-base-content/70">
                    <div className="flex items-center gap-1">
                        <BedDouble size={18} className="text-primary" />
                        <span className="text-xs font-bold">{bed} Bed</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Bath size={18} className="text-primary" />
                        <span className="text-xs font-bold">{bath} Bath</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Square size={18} className="text-primary" />
                        <span className="text-xs font-bold">{size} sqft</span>
                    </div>
                </div>

                <div className="mt-auto pt-6">
                    <Link 
                        to={`/properties/${_id}`} 
                        className="btn btn-primary w-full group/btn relative overflow-hidden flex items-center justify-center gap-2"
                    >
                        <span>View Property</span>
                        <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EstateCard;