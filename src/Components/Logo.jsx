import React from 'react';
// import home from '../assets/home.png'
import homeImg from '../assets/icons8-home-64.png'
const Logo = () => {
    return (
        <div className='flex items-center '>
            <div className="">
                <img
                className='md:w-12 md:h-12 w-7 h-7'
                src={homeImg} alt="" />
            </div>
            <a className=" md:text-3xl text-xl font-extrabold "><span className='text-primary'>Home</span>Nest</a>

        </div>
    );
};

export default Logo;