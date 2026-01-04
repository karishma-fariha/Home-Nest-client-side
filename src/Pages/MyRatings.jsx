import React, { useEffect, useState, useContext, useMemo } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { Link } from "react-router";
import { 
    Star, MessageSquare, Trash2, Calendar, 
    Building2, Quote, User, ArrowLeft, ShieldCheck, AlertCircle 
} from "lucide-react";

const MyRatings = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.email) return;
        const controller = new AbortController();
        
        fetch(`https://home-nest-server-side.vercel.app/my-reviews/${user.email}`, { 
            signal: controller.signal 
        })
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setLoading(false);
            })
            .catch(err => {
                if (err.name !== 'AbortError') {
                    console.error("Fetch error:", err);
                    setLoading(false);
                }
            });

        return () => controller.abort();
    }, [user?.email]);

    const stats = useMemo(() => {
        const total = reviews.length;
        const avg = total > 0 
            ? (reviews.reduce((acc, curr) => acc + curr.rating, 0) / total).toFixed(1) 
            : 0;
        return { total, avg };
    }, [reviews]);

    if (loading) return (
        <div className="flex flex-col justify-center items-center h-[60vh] gap-4">
            <span className="loading loading-bars loading-lg text-primary"></span>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 text-base-content">Initializing Feed</p>
        </div>
    );

    return (
        <div className="max-w-6xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
            
            {/* --- DASHBOARD HEADER --- */}
            <div className="bg-neutral text-neutral-content rounded-[2.5rem] p-8 shadow-2xl flex flex-col lg:flex-row justify-between items-center border border-white/5 relative overflow-hidden">
                {/* Subtle background glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[80px]"></div>
                
                <div className="flex items-center gap-6 relative z-10">
                    <div className="relative">
                        <div className="w-20 h-20 rounded-2xl overflow-hidden ring-4 ring-primary/30 shadow-2xl">
                            <img 
                                src={user?.photoURL || `https://ui-avatars.com/api/?name=${user?.displayName}&background=0D8ABC&color=fff`} 
                                alt="Profile" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-success text-white p-1.5 rounded-full border-4 border-neutral shadow-lg">
                            <ShieldCheck size={14} />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-3xl font-black tracking-tighter">My Ratings</h1>
                        <p className="text-xs font-bold opacity-50 uppercase tracking-widest mt-1">
                            Review Analytics for {user?.displayName}
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 mt-8 lg:mt-0 relative z-10">
                    <div className="bg-white/5 backdrop-blur-xl px-8 py-3 rounded-2xl border border-white/10 text-center min-w-[140px]">
                        <p className="text-[10px] font-black opacity-40 uppercase tracking-tighter">Contributions</p>
                        <p className="text-2xl font-black text-primary">{stats.total}</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-xl px-8 py-3 rounded-2xl border border-white/10 text-center min-w-[140px]">
                        <p className="text-[10px] font-black opacity-40 uppercase tracking-tighter">Average Score</p>
                        <p className="text-2xl font-black text-orange-400 flex items-center gap-1 justify-center">
                            {stats.avg} <Star size={18} fill="currentColor" />
                        </p>
                    </div>
                </div>
            </div>

            {/* --- REVIEWS LIST --- */}
            {reviews.length === 0 ? (
                <div className="text-center py-24 bg-base-100 rounded-[3rem] border-2 border-dashed border-base-300">
                    <AlertCircle size={48} className="mx-auto mb-4 opacity-10" />
                    <h3 className="text-xl font-bold">No Records Found</h3>
                    <Link to="/" className="btn btn-primary btn-sm mt-4 rounded-xl px-8">Find Properties</Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6">
                    {reviews.map((r, idx) => (
                        <div key={idx} className="group bg-base-100 rounded-[2.5rem] border border-base-300 p-8 hover:border-primary/40 transition-all duration-500 relative overflow-hidden">
                            
                            {/* FIXED QUOTE: Moved to top-right with low z-index */}
                            <Quote 
                                size={140} 
                                className="absolute -right-4 -top-4 text-base-content/5 opacity-[0.03] group-hover:opacity-[0.08] group-hover:text-primary transition-all duration-700 pointer-events-none z-0" 
                            />

                            <div className="flex flex-col lg:flex-row gap-10 relative z-10">
                                {/* Left Side: Property & Date Info */}
                                <div className="lg:w-1/4 space-y-5 border-b lg:border-b-0 lg:border-r border-base-200 pb-6 lg:pb-0">
                                    <div className="flex gap-1.5 text-orange-400">
                                        {[...Array(5)].map((_, i) => (
                                            <Star 
                                                key={i} 
                                                size={18} 
                                                fill={i < r.rating ? "currentColor" : "none"} 
                                                className={i < r.rating ? "drop-shadow-sm" : "text-base-300"} 
                                            />
                                        ))}
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 text-[11px] font-bold opacity-60">
                                            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                                <Building2 size={14} />
                                            </div>
                                            <span>ID: {r.propertyId.slice(-8)}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-[11px] font-bold opacity-60">
                                            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                                <Calendar size={14} />
                                            </div>
                                            {new Date(r.created_at).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side: Text & Actions */}
                                <div className="flex-1 flex flex-col justify-between">
                                    <p className="text-xl font-medium leading-relaxed italic text-base-content/70 mb-8 pr-10">
                                        "{r.text}"
                                    </p>
                                    
                                    <div className="flex items-center justify-between mt-auto">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-base-200 flex items-center justify-center">
                                                <User size={14} className="opacity-40" />
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Published as {r.userName}</span>
                                        </div>
                                        
                                        {/* DELETE BUTTON: Clearly separated */}
                                        <button className="btn btn-circle btn-ghost text-error hover:bg-error/10 border border-transparent hover:border-error/20 transition-all shadow-sm group/btn">
                                            <Trash2 size={20} className="group-hover/btn:scale-110 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="flex justify-center pb-12">
                <Link to='/' className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] opacity-20 hover:opacity-100 transition-all">
                    <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
                    Back to Marketplace
                </Link>
            </div>
        </div>
    );
};

export default MyRatings;