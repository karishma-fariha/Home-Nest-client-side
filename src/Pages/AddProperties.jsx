import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Provider/AuthContext";
import Swal from "sweetalert2";
import { 
    Building2, MapPin, Tag, DollarSign, Image as ImageIcon, 
    FileText, PlusCircle, Loader2, BedDouble, Bath, Square 
} from "lucide-react";

const AddProperties = () => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    // Matches your EstateCard data structure
    const [formData, setFormData] = useState({
        title: "",
        short_description: "", // Renamed to match Card
        category: "",
        price: "",
        location: "",
        image: "",
        bed: "",   // New field
        bath: "",  // New field
        size: "",  // New field
        userEmail: user?.email || "",
        userName: user?.displayName || "",
        created_at: new Date().toISOString()
    });

    useEffect(() => {
        if (user) {
            setFormData(prev => ({ ...prev, userEmail: user.email, userName: user.displayName }));
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Convert numeric strings to numbers for professional data handling
        const finalData = {
            ...formData,
            price: parseInt(formData.price),
            bed: parseInt(formData.bed),
            bath: parseInt(formData.bath),
            size: parseInt(formData.size),
        };

        try {
            const res = await fetch("https://home-nest-server-side.vercel.app/properties", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(finalData),
            });

            const data = await res.json();

            if (data.insertedId) {
                Swal.fire({
                    icon: "success",
                    title: "Property Listed!",
                    text: "Your property is now live in the directory.",
                    confirmButtonColor: "#3b82f6",
                });

                setFormData({
                    title: "", short_description: "", category: "", price: "",
                    location: "", image: "", bed: "", bath: "", size: "",
                    userEmail: user?.email, userName: user?.displayName,
                    created_at: new Date().toISOString()
                });
            }
        } catch (error) {
          console.log(error)
            Swal.fire({ icon: "error", title: "Oops!", text: "Failed to connect to server." });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-base-200 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h2 className="text-4xl font-black text-base-content flex items-center gap-3">
                            <PlusCircle className="text-primary" size={36} /> List Property
                        </h2>
                        <p className="text-base-content/60 mt-2 italic">Fill in the technical specifications for your listing.</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* LEFT COLUMN: Textual Info */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="card bg-base-100 shadow-xl border border-base-300">
                            <div className="card-body">
                                <h3 className="font-bold text-lg flex items-center gap-2 border-b border-base-200 pb-3 mb-4">
                                    <FileText size={20} className="text-primary" /> Property Details
                                </h3>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="form-control md:col-span-2">
                                        <label className="label font-bold text-xs uppercase opacity-60">Property Title</label>
                                        <div className="relative">
                                            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 opacity-30" size={18} />
                                            <input name="title" type="text" placeholder="Luxury Apartment..." required 
                                                value={formData.title} onChange={handleChange} className="input input-bordered w-full pl-10" />
                                        </div>
                                    </div>

                                    <div className="form-control">
                                        <label className="label font-bold text-xs uppercase opacity-60">Category</label>
                                        <div className="relative">
                                            <Tag className="absolute left-3 top-1/2 -translate-y-1/2 opacity-30" size={18} />
                                            <select name="category" required value={formData.category} onChange={handleChange} 
                                                className="select select-bordered w-full pl-10">
                                                <option value="">Select Type</option>
                                                <option value="Residential">Residential</option>
                                                <option value="Commercial">Commercial</option>
                                                <option value="Penthouse">Penthouse</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-control">
                                        <label className="label font-bold text-xs uppercase opacity-60">Price (৳)</label>
                                        <div className="relative">
                                            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 opacity-30" size={18} />
                                            <input name="price" type="number" placeholder="Enter Amount" required 
                                                value={formData.price} onChange={handleChange} className="input input-bordered w-full pl-10" />
                                        </div>
                                    </div>
                                </div>

                                {/* TECHNICAL SPECS ROW */}
                                <div className="grid grid-cols-3 gap-4 mt-6">
                                    <div className="form-control">
                                        <label className="label font-bold text-xs uppercase opacity-60">Beds</label>
                                        <div className="relative">
                                            <BedDouble className="absolute left-3 top-1/2 -translate-y-1/2 opacity-30" size={18} />
                                            <input name="bed" type="number" placeholder="0" required 
                                                value={formData.bed} onChange={handleChange} className="input input-bordered w-full pl-10" />
                                        </div>
                                    </div>
                                    <div className="form-control">
                                        <label className="label font-bold text-xs uppercase opacity-60">Baths</label>
                                        <div className="relative">
                                            <Bath className="absolute left-3 top-1/2 -translate-y-1/2 opacity-30" size={18} />
                                            <input name="bath" type="number" placeholder="0" required 
                                                value={formData.bath} onChange={handleChange} className="input input-bordered w-full pl-10" />
                                        </div>
                                    </div>
                                    <div className="form-control">
                                        <label className="label font-bold text-xs uppercase opacity-60">Size (sqft)</label>
                                        <div className="relative">
                                            <Square className="absolute left-3 top-1/2 -translate-y-1/2 opacity-30" size={18} />
                                            <input name="size" type="number" placeholder="0" required 
                                                value={formData.size} onChange={handleChange} className="input input-bordered w-full pl-10" />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-control mt-6">
                                    <label className="label font-bold text-xs uppercase opacity-60">Location</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 opacity-30" size={18} />
                                        <input name="location" type="text" placeholder="Area, City" required 
                                            value={formData.location} onChange={handleChange} className="input input-bordered w-full pl-10" />
                                    </div>
                                </div>

                                <div className="form-control mt-6">
                                    <label className="label font-bold text-xs uppercase opacity-60">Short Description</label>
                                    <textarea name="short_description" placeholder="Brief overview of the property..." 
                                        rows={4} required value={formData.short_description} onChange={handleChange} 
                                        className="textarea textarea-bordered w-full leading-relaxed" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Media & Action */}
                    <div className="space-y-6">
                        <div className="card bg-base-100 shadow-xl border border-base-300">
                            <div className="card-body">
                                <h3 className="font-bold text-lg flex items-center gap-2 border-b border-base-200 pb-3 mb-2">
                                    <ImageIcon size={20} className="text-primary" /> Visuals
                                </h3>
                                <input name="image" type="text" placeholder="Paste Image URL" required 
                                    value={formData.image} onChange={handleChange} className="input input-bordered w-full" />
                                
                                <div className="mt-4 aspect-video rounded-xl border-2 border-dashed border-base-300 flex items-center justify-center overflow-hidden bg-base-200">
                                    {formData.image ? (
                                        <img src={formData.image} alt="Preview" className="w-full h-full object-cover" 
                                            onError={(e) => { e.target.src = "https://placehold.co/600x400?text=Invalid+Link"; }} />
                                    ) : (
                                        <div className="text-center opacity-20">
                                            <ImageIcon size={40} className="mx-auto" />
                                            <p className="text-[10px] font-bold uppercase mt-2">Live Preview</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="card bg-neutral text-neutral-content shadow-2xl">
                            <div className="card-body">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="avatar placeholder">
                                        <div className="bg-primary text-primary-content rounded-full w-10">
                                            <span>{user?.displayName?.charAt(0)}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-xs opacity-60 uppercase font-bold">Listing as</p>
                                        <p className="font-bold text-sm truncate">{user?.displayName}</p>
                                    </div>
                                </div>
                                <button type="submit" disabled={loading} className="btn btn-primary w-full gap-2">
                                    {loading ? <Loader2 className="animate-spin" size={20} /> : <><PlusCircle size={18} /> Publish Property</>}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProperties;