import React from 'react';
import image from '../../assets/image/Ellipse 1 (2).png';

const FriendsCards = () => {
    return (
        <div className='mb-20 p-5 '>
            {/* left */}
        <div className="card bg-base-100 w-70 shadow-sm items-center">
             <div className="card-body">
             <img src= {image} alt="" />
            <h2 className="card-title text-4xl font-bold">David Kim</h2>
            <p className='text-center'>62d ago</p>
          </div>
          <div className='flex flex-col gap-2 pb-8 '>
            <div className="badge badge-soft badge-accent">Accent</div>
            <div className="badge badge-soft badge-accent">Accent</div>
        </div>
        </div>
            
 
        </div>
    );
};

export default FriendsCards;