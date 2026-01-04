import React from 'react';
import { Link } from 'react-router';
import { 
    Facebook, Linkedin, Twitter, Mail, 
    MapPin, Phone, ArrowRight, Home 
} from "lucide-react";
import homeIcon from '../assets/icons8-home-64.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral text-neutral-content">
            {/* --- MAIN FOOTER CONTENT --- */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    
                    {/* Column 1: Brand Identity */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="bg-white p-2 rounded-xl shadow-lg">
                                <img className="w-8 h-8" src={homeIcon} alt="HomeNest Logo" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-black tracking-tighter text-white">HomeNest</h2>
                                <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">Premium Real Estate</p>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed opacity-70">
                            The most trusted platform for finding your next home. We connect buyers, sellers, and renters with premium properties worldwide.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all duration-300">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all duration-300">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all duration-300">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Navigation */}
                    <div>
                        <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
                        <ul className="space-y-4 text-sm opacity-70">
                            <li><Link to="/" className="hover:text-primary hover:pl-2 transition-all duration-300">Home Marketplace</Link></li>
                            <li><Link to="/properties" className="hover:text-primary hover:pl-2 transition-all duration-300">Browse Properties</Link></li>
                            <li><Link to="/dashboard" className="hover:text-primary hover:pl-2 transition-all duration-300">Owner Dashboard</Link></li>
                            <li><Link to="/about" className="hover:text-primary hover:pl-2 transition-all duration-300">Our Story</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h3 className="text-white font-bold mb-6 text-lg">Contact Us</h3>
                        <ul className="space-y-4 text-sm opacity-70">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-primary shrink-0" />
                                <span>123 Realty Avenue, <br /> Manhattan, NY 10001</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-primary shrink-0" />
                                <span>+1 (555) 000-1234</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-primary shrink-0" />
                                <span>support@homenest.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div>
                        <h3 className="text-white font-bold mb-6 text-lg">Newsletter</h3>
                        <p className="text-sm opacity-70 mb-4">Subscribe to get the latest property alerts and market news.</p>
                        <div className="relative">
                            <input 
                                type="email" 
                                placeholder="Your email address" 
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 text-sm focus:outline-none focus:border-primary transition-all"
                            />
                            <button className="absolute right-2 top-2 bottom-2 bg-primary text-white px-4 rounded-lg hover:bg-primary-focus transition-all">
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* --- BOTTOM BAR --- */}
            <div className="border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs opacity-50 font-medium">
                        © {currentYear} HomeNest Real Estate Ltd. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest opacity-40">
                        <Link to="/privacy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
                        <Link to="/terms" className="hover:opacity-100 transition-opacity">Terms of Service</Link>
                        <Link to="/cookies" className="hover:opacity-100 transition-opacity">Cookie Settings</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;