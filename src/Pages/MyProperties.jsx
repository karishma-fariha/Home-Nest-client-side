import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";
import PropertyCard from "./PropertyCard";
import UpdateProperty from "../Components/UpdateProperty";
import { Link } from "react-router";
import { 
    Plus, Building2, LayoutGrid, List, 
    Search, Filter, Loader2, ArrowUpRight 
} from "lucide-react";

const MyProperties = () => {
    const { user } = useContext(AuthContext);
    const [properties, setProperties] = useState([]);
    // Initialize loading as true to prevent the useEffect re-render loop
    const [loading, setLoading] = useState(true);
    const [selectedProperty, setSelectedProperty] = useState(null);

    useEffect(() => {
        if (!user?.email) return;
        
        const controller = new AbortController();
        const fetchData = async () => {
            try {
                const res = await fetch(
                    `https://home-nest-server-side.vercel.app/properties?userEmail=${user.email}`,
                    { signal: controller.signal }
                );
                const data = await res.json();
                setProperties(data);
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.error("Error fetching properties:", error);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        return () => controller.abort();
    }, [user?.email]);

    const handleDeleteSuccess = (id) => {
        setProperties((prev) => prev.filter((item) => item._id !== id));
    };

    const handleUpdateClick = (property) => {
        setSelectedProperty(property);
    };

    const handleUpdated = (updatedProperty) => {
        setProperties((prev) =>
            prev.map((p) => (p._id === updatedProperty._id ? updatedProperty : p))
        );
        setSelectedProperty(null);
    };

    if (loading) return (
        <div className="h-[60vh] flex flex-col items-center justify-center">
            <Loader2 className="animate-spin text-primary mb-4" size={40} />
            <p className="font-bold tracking-[0.2em] text-base-content/40 uppercase text-[10px]">Loading Inventory</p>
        </div>
    );

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            
            {/* --- SUB-HEADER SECTION --- */}
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black tracking-tight flex items-center gap-3">
                        Property Inventory 
                        <span className="badge badge-primary badge-outline font-bold">{properties.length}</span>
                    </h1>
                    <p className="text-base-content/50 text-sm mt-1">Manage, update, and track your active real estate listings.</p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                    <div className="relative group flex-1 md:flex-none">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/30 group-focus-within:text-primary transition-colors" size={18} />
                        <input 
                            type="text" 
                            placeholder="Search listings..." 
                            className="input input-bordered bg-base-100 rounded-xl pl-12 w-full md:w-64 focus:outline-primary/30"
                        />
                    </div>
                    <button className="btn btn-square bg-base-100 border-base-300 hover:border-primary">
                        <Filter size={18} />
                    </button>
                    <Link to="/dashboard/add" className="btn btn-primary rounded-xl gap-2 shadow-lg shadow-primary/20">
                        <Plus size={20} /> List New
                    </Link>
                </div>
            </div>

            {/* --- INVENTORY SUMMARY CARDS --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-base-100 p-6 rounded-3xl border border-base-300 flex items-center justify-between group hover:border-primary transition-all">
                    <div>
                        <p className="text-[10px] font-black uppercase opacity-40 tracking-widest mb-1">Live Listings</p>
                        <p className="text-3xl font-black">{properties.length}</p>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-success/10 text-success flex items-center justify-center">
                        <ArrowUpRight size={24} />
                    </div>
                </div>
                {/* Add more summary tiles here if needed */}
            </div>

            {/* --- CONTENT AREA --- */}
            {!properties.length ? (
                <div className="bg-base-100 border-2 border-dashed border-base-300 rounded-[3rem] p-20 text-center">
                    <div className="w-20 h-20 bg-base-200 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Building2 className="opacity-20 text-primary" size={40} />
                    </div>
                    <h2 className="text-2xl font-black mb-2">No Listings Found</h2>
                    <p className="text-base-content/50 max-w-sm mx-auto mb-8 text-sm">
                        You haven't added any properties to your portfolio yet. Ready to make your first sale?
                    </p>
                    <Link to="/dashboard/add" className="btn btn-primary btn-wide rounded-2xl">
                        Add Your First Property
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8 pb-20">
                    {properties.map((prop) => (
                        <div key={prop._id} className="hover:-translate-y-2 transition-all duration-300">
                            <PropertyCard
                                property={prop}
                                onDeleteSuccess={handleDeleteSuccess}
                                onUpdateClick={handleUpdateClick}
                            />
                        </div>
                    ))}
                </div>
            )}

            {/* --- UPDATE MODAL OVERLAY --- */}
            {selectedProperty && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div 
                        className="absolute inset-0 bg-neutral/80 backdrop-blur-md animate-in fade-in duration-300" 
                        onClick={() => setSelectedProperty(null)}
                    ></div>
                    
                    {/* Modal Content */}
                    <div className="bg-base-100 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl relative z-10 animate-in zoom-in-95 duration-300 border border-white/10">
                        <div className="sticky top-0 right-0 p-6 flex justify-end z-20 pointer-events-none">
                            <button 
                                onClick={() => setSelectedProperty(null)}
                                className="btn btn-circle btn-sm pointer-events-auto bg-base-200 border-none hover:bg-error hover:text-white"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="p-2 md:p-8 mt--12">
                             <UpdateProperty
                                property={selectedProperty}
                                onClose={() => setSelectedProperty(null)}
                                onUpdated={handleUpdated}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyProperties;