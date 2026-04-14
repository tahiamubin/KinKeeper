import React from 'react';
import image from '../../assets/image/Ellipse 1 (2).png';
import { MdAddCall, MdOutlineDelete, MdOutlineSnooze } from 'react-icons/md';
import { IoArchiveOutline } from 'react-icons/io5';
import { MessageSquareMore, PhoneForwarded, PhoneIncoming, Video } from 'lucide-react';

const FriendsDetails = () => {
    return (
        <div className='flex justify-around mx-auto  mb-20'>
            {/* left */}
    
                <div>
                    <div className="card  w-70 shadow-sm items-center">
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
                 <div>
                    <div className='space-y-2 mt-3'>
                        <h1 className='text-xl font-semibold flex items-center
                         gap-2  p-2 bg-gray-100 rounded-2xl w-70'> <MdOutlineSnooze /> Snooze 2 weeks</h1>
                        <h1 className='text-xl font-semibold flex items-center gap-2
                         p-2 bg-gray-100 rounded-2xl w-70'> <IoArchiveOutline /> Archive</h1>
                        <h1 className='text-xl font-semibold flex items-center gap-2  p-2 bg-gray-100 rounded-2xl w-70 text-red-600'><MdOutlineDelete /> Delete</h1>
                    </div>
                 </div>
                </div>

            {/* right */}

        <div>
            <div className='grid grid-cols-3 mb-10 gap-4'>
            <div className="card card-border bg-white  w-80">
            <div className="card-body text-center">
    <h2 className="text-4xl font-bold text-[#244D3F]">62</h2>
    <p className='text-gray-700'>Days Since Contact</p>
           </div>
            </div>
            <div className="card card-border w-80 bg-white">
              <div className="card-body text-center">
    <h2 className="text-4xl font-bold text-[#244D3F]">30</h2>
    <p className='text-gray-700'>Goal (Days)</p>
          </div>
            </div>
            <div className="card card-border w-80 bg-white">
               <div className="card-body text-center">
    <h2 className="text-4xl font-bold text-[#244D3F]">Feb 27, 2026</h2>
    <p className='text-gray-700'>Next Due</p>
            </div>
            </div>
                
            </div>

            <div className=' mb-4 '>
                <div className="card w-full bg-white card-xs shadow-sm p-5 ">
  <div className="card-body">
    
    <div className='flex justify-between'>
        <h2 className="card-title text-[#244D3F] text-2xl">Relationship Goal</h2>
        <button className='btn'>Edit</button>
    </div>
    <p className='text-xl text-[#244D3F]'>Connect every <span className='font-bold'>30 days</span></p>
    
  </div>
                </div>
            </div>

            {/* Quick Check-In */}
            <div className='mt-8'>
                <div className="card w-full bg-base-100 card-xs shadow-sm p-5 space-x-1.5">
  <div className="card-body">
    
    <div className='space-y-4'>
        <h2 className="card-title text-[#244D3F] text-2xl">Quick Check-In</h2>   

        {/* box   */}

       <div className="card  bg-base-100 card-xs shadow-sm grid grid-cols-3 gap-4">
                <div className="card-body bg-gray-100 items-center p-2 rounded-2xl">
    <h2 className="card-title"><PhoneIncoming /></h2>
    <p className='text-4xl text-[#244D3F]'>Call</p>
                </div>
                <div className="card-body bg-gray-100 items-center p-2 rounded-2xl">
    <h2 className="card-title"><MessageSquareMore /></h2>
    <p className='text-4xl text-[#244D3F]'>Text</p>
                </div>
                <div className="card-body bg-gray-100 items-center p-2 rounded-2xl">
    <h2 className="card-title"><Video /></h2>
    <p className='text-4xl text-[#244D3F]'>Video</p>
                </div>
</div>
    </div>
    
   
    
  </div>
                </div>
            </div>

            {/* Recent Interactions */}
            <div className='mt-8' >
                <div className="card w-full bg-base-100 card-lg shadow-sm">
  <div className="card-body">
    <h2 className="card-title text-[#244D3F] text-2xl" >Recent Interactions</h2>
    <div>
       <div className="card w-full bg-base-100 card-xs shadow-sm">
  <div className="card-body">
    <div className='space-y-2.5'>
                <div class="flex items-center justify-between ">
  <div class="flex items-center gap-3">
    <div>
        <h1><MessageSquareMore /></h1>
        <h1 className='text-xl font-semibold text-[#244D3F] '>Text</h1>
        <p className='text-gray-600 font-semibold'>Asked for career advice</p>
    </div>
  </div>
  <span class="text-sm text-gray-500">Jan 28, 2026</span>
                </div>
    </div>

     <div class="flex items-center justify-between ">
  <div class="flex items-center gap-3">
    <div>
        <h1><PhoneForwarded /></h1>
        <h1 className='text-xl font-semibold text-[#244D3F] '>Meetup</h1>
        <p className='text-gray-600 font-semibold'>Industry conference meetupe</p>
    </div>
  </div>
  <span class="text-sm text-gray-500">Jan 28, 2026</span>
                </div>

                <div>
                     <div class="flex items-center justify-between ">
  <div class="flex items-center gap-3">
    <div>
        <h1><Video /></h1>
        <h1 className='text-xl font-semibold text-[#244D3F] '>Video</h1>
        <p className='text-gray-600 font-semibold'>Asked for career advice</p>
    </div>
  </div>
  <span class="text-sm text-gray-500">Jan 28, 2026</span>
                </div>
                </div>
    
  </div>
</div> 
    </div>
   
  </div>
</div>
            </div>

        </div>
            
        </div>
    );
};

export default FriendsDetails;