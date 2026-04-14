import React from "react";

const Count = () => {
  return (
    <div className="grid sm: grid-cols-1 justify-center items-center md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
      <div className="card card-border bg-white w-70">
        <div className="card-body text-center">
          <h2 className="text-4xl font-bold text-[#244D3F]">10</h2>
          <p className="text-gray-700">Total Friends</p>
        </div>
      </div>
      <div className="card card-border  bg-white w-70">
        <div className="card-body text-center">
          <h2 className="text-4xl font-bold text-[#244D3F]">3</h2>
          <p className="text-gray-700">On Track</p>
        </div>
      </div>
      <div className="card card-border  bg-white w-70">
        <div className="card-body text-center">
          <h2 className="text-4xl font-bold text-[#244D3F]">6</h2>
          <p className="text-gray-700">Need Attention</p>
        </div>
      </div>
      <div className="card card-border bg-white w-70">
        <div className="card-body text-center">
          <h2 className="text-4xl font-bold text-[#244D3F]">12</h2>
          <p className="text-gray-700">Interactions This Month</p>
        </div>
      </div>
    </div>
  );
};

export default Count;
