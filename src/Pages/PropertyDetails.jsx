import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { 
    MapPin, BedDouble, Bath, Square, Calendar, 
    User, Star, MessageSquare, ArrowLeft, Send, 
    ShieldCheck, Info, DollarSign, Tag
} from "lucide-react";

const PropertyDetails = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [property, setProperty] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [rating, setRating] = useState(5);
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://home-nest-server-side.vercel.app/properties/${id}`)
            .then(res => res.json())
            .then(data => {
                setProperty(data);
                setLoading(false);
            });

        fetch(`https://home-nest-server-side.vercel.app/reviews/${id}`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [id]);

    const handleAddReview = async () => {
        if (!text) return toast.error("Review content is required");
        const reviewData = {
            propertyId: id,
            userEmail: user?.email,
            userName: user?.displayName,
            rating: Number(rating),
            text,
            created_at: new Date().toISOString()
        };

        try {
            const res = await fetch("https://home-nest-server-side.vercel.app/reviews", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(reviewData),
            });
            const data = await res.json();
            if (data.insertedId) {
                toast.success("Review added");
                setReviews(prev => [reviewData, ...prev]);
                setText("");
            }
        } catch (err) {
            toast.error("Failed to post review");
        }
    };

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-base-100">
            <span className="loading loading-ring loading-lg text-primary"></span>
        </div>
    );

    return (
        <div className="bg-base-100 min-h-screen font-sans">
            <Navbar />

            <div className="max-w-6xl mx-auto px-4 py-10">
                {/* 1. BREADCRUMBS & NAVIGATION */}
                <div className="flex items-center gap-2 text-sm mb-6 opacity-60">
                    <Link to="/properties" className="hover:text-primary transition-colors">Properties</Link>
                    <span>/</span>
                    <span className="font-bold text-base-content uppercase tracking-tighter">{property.category}</span>
                    <span>/</span>
                    <span className="truncate max-w-[200px]">{property.title}</span>
                </div>

                {/* 2. TOP SECTION: IMAGE + KEY STATS */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
                    {/* Contained Image (7/12) */}
                    <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-xl border border-base-300">
                        <img 
                            src={property.image} 
                            alt={property.title} 
                            className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700" 
                        />
                    </div>

                    {/* Quick Specs Grid (5/12) */}
                    <div className="lg:col-span-5 h-full flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <h1 className="text-4xl font-black text-base-content leading-tight">
                                    {property.title}
                                </h1>
                            </div>
                            
                            <div className="flex items-center gap-2 text-base-content/60 mb-6">
                                <MapPin size={18} className="text-primary" />
                                <span className="text-lg">{property.location}</span>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-base-200 p-4 rounded-2xl border border-base-300 flex items-center gap-4">
                                    <div className="p-3 bg-primary/10 rounded-xl text-primary"><DollarSign size={20}/></div>
                                    <div>
                                        <p className="text-[10px] uppercase font-bold opacity-50">Price</p>
                                        <p className="text-lg font-black text-primary">৳{Number(property.price).toLocaleString()}</p>
                                    </div>
                                </div>
                                <div className="bg-base-200 p-4 rounded-2xl border border-base-300 flex items-center gap-4">
                                    <div className="p-3 bg-secondary/10 rounded-xl text-secondary"><Tag size={20}/></div>
                                    <div>
                                        <p className="text-[10px] uppercase font-bold opacity-50">Type</p>
                                        <p className="text-lg font-black">{property.category}</p>
                                    </div>
                                </div>
                                <div className="bg-base-200 p-4 rounded-2xl border border-base-300 flex items-center gap-4">
                                    <div className="p-3 bg-accent/10 rounded-xl text-accent"><BedDouble size={20}/></div>
                                    <div>
                                        <p className="text-[10px] uppercase font-bold opacity-50">Beds</p>
                                        <p className="text-lg font-black">{property.bed}</p>
                                    </div>
                                </div>
                                <div className="bg-base-200 p-4 rounded-2xl border border-base-300 flex items-center gap-4">
                                    <div className="p-3 bg-info/10 rounded-xl text-info"><Square size={20}/></div>
                                    <div>
                                        <p className="text-[10px] uppercase font-bold opacity-50">Area</p>
                                        <p className="text-lg font-black">{property.size} sqft</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-base-300 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-base-300 flex items-center justify-center font-bold text-primary">
                                    {property.userName?.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-xs font-bold opacity-50">Agent</p>
                                    <p className="text-sm font-bold">{property.userName}</p>
                                </div>
                            </div>
                            <Link to='/contact' className="btn btn-primary rounded-xl px-8 shadow-lg shadow-primary/20">Contact Now</Link>
                        </div>
                    </div>
                </div>

                {/* 3. INFORMATION SECTION */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Detailed Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <section>
                            <h3 className="text-2xl font-bold flex items-center gap-2 mb-4">
                                <Info size={24} className="text-primary"/> 
                                Comprehensive Description
                            </h3>
                            <div className="bg-base-200/50 p-8 rounded-3xl border border-base-300">
                                <p className="text-base-content/70 leading-relaxed text-lg whitespace-pre-line">
                                    {property.short_description || property.description}
                                </p>
                            </div>
                        </section>

                        <hr className="border-base-300" />

                        {/* Reviews */}
                        <section>
                            <h3 className="text-2xl font-bold flex items-center gap-2 mb-6">
                                <MessageSquare size={24} className="text-primary"/> 
                                Community Insights ({reviews.length})
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {reviews.map((r, idx) => (
                                    <div key={idx} className="bg-base-100 p-5 rounded-2xl border border-base-200 shadow-sm">
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                                                    {r.userName?.charAt(0)}
                                                </div>
                                                <span className="text-sm font-bold">{r.userName}</span>
                                            </div>
                                            <div className="flex items-center gap-1 text-orange-400">
                                                <Star size={14} fill="currentColor" />
                                                <span className="text-sm font-bold">{r.rating}</span>
                                            </div>
                                        </div>
                                        <p className="text-sm opacity-70 italic">"{r.text}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Side Action (Static Review Form) */}
                    <div className="lg:col-span-1">
                        <div className="bg-neutral text-neutral-content p-8 rounded-[2.5rem] shadow-2xl">
                            <h4 className="text-xl font-bold mb-4">Leave a Review</h4>
                            <p className="text-xs opacity-60 mb-6 leading-relaxed">
                                Helped others by sharing your experience or questions about this property.
                            </p>
                            
                            <div className="rating rating-sm mb-6 flex justify-center">
                                {[1,2,3,4,5].map(num => (
                                    <input key={num} type="radio" name="rating-detail" className="mask mask-star-2 bg-orange-400" 
                                    checked={rating === num} onChange={() => setRating(num)} />
                                ))}
                            </div>

                            <textarea 
                                className="textarea textarea-bordered w-full h-32 bg-white/5 border-white/20 text-white rounded-2xl mb-4" 
                                placeholder="Write your review..."
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />

                            <button onClick={handleAddReview} className="btn btn-primary w-full rounded-xl gap-2">
                                <Send size={18} /> Submit Review
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default PropertyDetails;