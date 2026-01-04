import React from 'react';
import { NavLink } from 'react-router';
import { 
    LayoutDashboard, Home, PlusCircle, Star, 
    LogOut, ArrowLeft, Building2, ChevronRight 
} from "lucide-react";

const Sidebar = () => {
    const menuItems = [
        { path: '/dashboard', label: 'Overview', icon: <LayoutDashboard size={20} /> },
        { path: '/myProperties', label: 'My Properties', icon: <Home size={20} /> },
        { path: '/addProperties', label: 'Add Property', icon: <PlusCircle size={20} /> },
        { path: '/myRatings', label: 'My Ratings', icon: <Star size={20} /> },
    ];

    return (
        <aside className="w-72 bg-neutral text-neutral-content flex flex-col h-screen sticky top-0 shadow-2xl z-20">
            {/* Branding */}
            <div className="p-8 flex items-center gap-3">
                <div className="bg-primary p-2 rounded-xl">
                    <Building2 size={24} className="text-primary-content" />
                </div>
                <span className="text-xl font-black tracking-tighter uppercase">HomeNest</span>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 space-y-2 mt-4">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => 
                            `flex items-center justify-between p-4 rounded-xl transition-all duration-200 group ${
                                isActive 
                                ? "bg-primary text-primary-content shadow-lg shadow-primary/20" 
                                : "hover:bg-white/10 opacity-70 hover:opacity-100"
                            }`
                        }
                    >
                        <div className="flex items-center gap-3 font-bold text-sm">
                            {item.icon}
                            {item.label}
                        </div>
                        <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </NavLink>
                ))}
            </nav>

            {/* Footer Actions */}
            <div className="p-6 border-t border-white/10 space-y-2">
                <NavLink to="/" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition-all font-bold text-sm opacity-70 hover:opacity-100">
                    <ArrowLeft size={18} /> Back to Home
                </NavLink>
                <button className="flex items-center gap-3 p-3 w-full rounded-xl hover:bg-error/20 hover:text-error transition-all font-bold text-sm opacity-70 hover:opacity-100">
                    <LogOut size={18} /> Logout
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;