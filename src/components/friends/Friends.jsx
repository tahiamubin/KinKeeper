import React from 'react';
import useFriends from '../hooks/UseFridends';
import FriendsCards from '../ui/FriendsCards';

import FriendsDetails from "../ui/FriendsDetails";
import Timeline from "../Timeline/Timeline";

import { Dice1 } from "lucide-react";
import { ClimbingBoxLoader } from "react-spinners";

const Friends = () => {
    const { friends, loading } = useFriends();
    return (
        <div>
            {loading && <div className="flex justify-center"> <ClimbingBoxLoader  color="#244D3F" /> 
            </div>}
      
      <div className="grid sm:grid-cols-1 items-center justify-center   md:grid-cols-2  lg:grid-cols-4  ">
        {friends.map((friend, index) => (
          <FriendsCards key={index} friend={friend}></FriendsCards>
        ))}
      </div>
        </div>
    );
};

export default Friends;