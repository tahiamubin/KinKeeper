import React from 'react';
import Banner from './Banner';
import Count from './Count';
import FriendsCards from '../ui/FriendsCards';
import FriendsDetails from '../ui/FriendsDetails';
import Timeline from '../Timeline/Timeline';

const Homepage = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <Count></Count>
            {/* Heading */}
            <div>
                <h1 className='text-3xl text-gray-700 font-bold'
                >Your Friends</h1>
            </div>
            <FriendsCards></FriendsCards>
            
            
           
        </div>
    );
};

export default Homepage;