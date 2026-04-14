import React from "react";
import Banner from "./Banner";
import Count from "./Count";
import FriendsCards from "../ui/FriendsCards";
import FriendsDetails from "../ui/FriendsDetails";
import Timeline from "../Timeline/Timeline";
import useFriends from "../hooks/UseFridends";

const Homepage = () => {
  const { friends } = useFriends();
  console.log(friends);
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <Count></Count>
      {/* Heading */}
      <div>
        <h1 className="text-3xl text-gray-700 font-bold mb-10">Your Friends</h1>
      </div>

      {/* cards */}
      <div className="grid sm:grid-cols-1 items-center justify-center   md:grid-cols-2  lg:grid-cols-4  ">
        {friends.map((friend, index) => (
          <FriendsCards key={index} friend={friend}></FriendsCards>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
