import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <div>
            <div className='space-y-4 mt-20 mb-10'>
                <h1 className='text-6xl font-bold text-center'>Friends to keep close in your life</h1>
                <p className='text-[#64748B] text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                relationships that matter most.</p>
                <button className='btn bg-[#244D3F] text-white 
                justify-center mx-auto flex  '>
                  <FaPlus />  Add a Friend
                </button>
            </div>
        </div>
    );
};

export default Banner;