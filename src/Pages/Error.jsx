import React from 'react';
import { BsEmojiSmileUpsideDown } from 'react-icons/bs';


const Error = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="flex items-center">
                <h1 className='text-8xl font-extrabold text-secondary'> 4 </h1>
                <span className='text-primary'> <BsEmojiSmileUpsideDown size={70} />
                </span>
                <h1 className='text-8xl font-extrabold text-secondary'>4 - Error!</h1>

               
            </div>

        </div>
    );
};

export default Error;