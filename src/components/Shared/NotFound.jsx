
import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div className='container mx-auto'>
            <div className='text-center items-center justify-center space-y-2 '>
                <div className='container mx-auto items-center justify-center display: flex'>
                    <img  src="/src/assets/image/Error Alien Spaceship.png" alt="" />
                </div>
                <p className='text-5xl text-center font-bold
                '>Page not found</p>
                <p className='text-gray-600'>The page you are looking for might have been removed ha d its name changed or is temporarily unavailable.</p>
               <Link to = "/">
               <button className='btn rounded-2xl bg-[#244D3F]  text-white'> Homepage</button>
               </Link>
            </div>
        </div>
    );
};

export default NotFound;