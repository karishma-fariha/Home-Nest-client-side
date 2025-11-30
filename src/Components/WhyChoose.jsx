import React from 'react';
import { FaMoneyBillWaveAlt, FaShieldAlt } from 'react-icons/fa';
import { FiLock, FiSearch } from 'react-icons/fi';
import { MdSupportAgent, MdUpdate } from 'react-icons/md';

const WhyChoose = () => {
    return (
        <div className='bg-base-100'>
            <h1 className='text-5xl text-primary font-bold text-center mb-2'>Why Choose HomeNest?</h1>
            <p className='text-xl text-gray-400 text-center'>Your trusted real estate partner, connecting you with verified properties at the best prices.</p>
            <div className="card grid md:grid-cols-3 grid-cols-1 gap-5 p-10">

                <div className="p-5 shadow-sm rounded-xl hover:bg-base-200">
                   <span className='py-4 text-secondary'> <FaShieldAlt size={50}></FaShieldAlt></span>
                   <h1 className='text-2xl font-bold py-2'>Verified & Trusted Listings</h1>
                   <p className='text-gray-400'>All properties go through a strict verification process to ensure safety and authenticity.</p>
                   
                </div>
                <div className="p-5 shadow-sm rounded-xl hover:bg-base-200">
                    <span className='py-4 text-secondary'><FiSearch size={50}></FiSearch></span>
                   <h1 className='text-2xl font-bold py-2'>Easy Search & Filters</h1>
                   <p className='text-gray-400'>Find your ideal home using advanced filters for price, category, and location.</p>
                   
                </div>
                <div className="p-5 shadow-sm rounded-xl hover:bg-base-200">
                   <span className='py-4 text-secondary'> <FaMoneyBillWaveAlt size={50}></FaMoneyBillWaveAlt></span>
                   <h1 className='text-2xl font-bold py-2'>Best Price Guarantee</h1>
                   <p className='text-gray-400'>We provide real-time market comparisons to ensure fair and transparent pricing.</p>
                   
                </div>
                <div className="p-5 shadow-sm rounded-xl hover:bg-base-200">
                   <span className='py-4 text-secondary'> <FiLock size={50}></FiLock></span>
                   <h1 className='text-2xl font-bold py-2'>Safe & Secure Interaction</h1>
                   <p className='text-gray-400'>Communicate with property owners securely through our platform.</p>
                   
                </div>
                <div className="p-5 shadow-sm rounded-xl hover:bg-base-200">
                    <span className='py-4 text-secondary'><MdSupportAgent size={50}></MdSupportAgent></span>
                   <h1 className='text-2xl font-bold py-2'>24/7 Customer Support</h1>
                   <p className='text-gray-400'>Our support team is always available to assist you with queries, visits, and property-related questions.</p>
                   
                </div>
                <div className="p-5 shadow-sm rounded-xl hover:bg-base-200">
                    <span className='py-4 text-secondary'><MdUpdate size={50}></MdUpdate></span>
                   <h1 className='text-2xl font-bold py-2'>Real-Time Updates</h1>
                   <p className='text-gray-400'>Get instant updates on new listings, price drops, and property availability in your preferred areas.</p>
                   
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;