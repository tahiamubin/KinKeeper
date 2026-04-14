import React from "react";
import Banner from "./Banner";
import Count from "./Count";
import Friends from "../friends/Friends";



const Homepage = () => {
  
  //console.log(friends);
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <Count></Count>
      {/* Heading */}
      <div>
        <h1 className="text-3xl text-gray-700 font-bold mb-10">Your Friends</h1>
      </div>

      {/* cards */}
      <Friends></Friends>

    </div>
  );
};

export default Homepage;
