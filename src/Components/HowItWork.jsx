import React from 'react';
import { LiaCcAmazonPay } from 'react-icons/lia';
import { TbHomeSearch, TbPhoneCall } from 'react-icons/tb';
import home from '../assets/real-estate-6688945_1280.jpg'
const HowItWork = () => {
    return (
        <div className="">
            <h1 className='text-5xl text-primary font-bold text-center mb-2'>How It Works</h1> <p className='text-xl text-gray-400 text-center mb-5'>A simple and seamless process to help you find your next home.</p>

            <div className="relative w-full my-10">
                <img
                    src={home}
                    className="w-full h-screen object-cover"
                />

                <div className="absolute inset-y-0 left-0 w-1/2 bg-black/50 text-white flex flex-col justify-center items-start px-10 space-y-8">

                    <div className="flex items-start gap-4">
                        <TbHomeSearch size={50} className="text-secondary" />
                        <div>
                            <h1 className="text-2xl font-bold mb-1">Search Your Home</h1>
                            <p>Select your home or apartment and contact us. Ask any question you have.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <TbPhoneCall size={50} className="text-secondary" />
                        <div>
                            <h1 className="text-2xl font-bold mb-1">Let's Contact</h1>
                            <p>Our support team and agents are always ready to assist you.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <LiaCcAmazonPay size={50} className="text-secondary" />
                        <div>
                            <h1 className="text-2xl font-bold mb-1">Make a Deal & Payment</h1>
                            <p>Complete the property deal and pay your rent or installment online.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default HowItWork;