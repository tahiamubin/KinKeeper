import { Handshake } from 'lucide-react';
import React from 'react';

const Timeline = () => {
    return (
        <div className='container mx-auto space-y-6'>
            <h1 className='text-4xl font-bold text-gray-700 '>Timeline</h1>
             {/* sort */}

            <div className='rounded-xl '>
                 <div className="card w-full bg-base-100 card-xs shadow-sm p-2">
  <div className="card-body">
    <h2 className="card-title"><Handshake /></h2>
    <p className='text-[#244D3F] text-2xl'><span className='font-bold'>Meetup</span> <span>with Enter your name</span></p>
    <p className='text-gray-800 text-xl'>March 21, 2026</p>
    
  </div>
</div>
            </div>
        </div>
    );
};

export default Timeline;