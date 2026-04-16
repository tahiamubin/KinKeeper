import { Handshake, Mail, PhoneIncoming, Video } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { FriendContext } from "../context/FriendContext";

const Timeline = () => {
  const { timeLine } = useContext(FriendContext);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredTimeline =
    activeFilter === "All"
      ? timeLine
      : timeLine.filter((entry) => entry.type === activeFilter);

  
  const icons = {
    Call: <PhoneIncoming />,
    Text: <Mail />,
    Video: <Video />,
  };

  return (
    <div className="container mx-auto space-y-6 mb-10">
      <h1 className="text-4xl font-bold text-gray-700 mt-10  ">Timeline</h1>
      {/* sort */}
      <div>
        <details className="dropdown">
          <summary className="btn m-1">Filter timeline</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li onClick={() => setActiveFilter("All")}>
              <a>all</a>
            </li>
            <li onClick={() => setActiveFilter("Call")}>
              <a>Call</a>
            </li>
            <li onClick={() => setActiveFilter("Text")}>
              <a>Text</a>
            </li>
            <li onClick={() => setActiveFilter("Video")}>
              <a>Video</a>
            </li>
          </ul>
        </details>
        {filteredTimeline.map((item, index) => (
          <div key={index}>
            
          <div className="rounded-xl ">
            <div className="card w-full bg-base-100 card-xs shadow-sm p-2">
              <div className="card-body">
                <h2 className="card-title">{icons[item.type]}</h2>
                <p className="text-[#244D3F] text-2xl">
                  <span className="font-bold">{item.type}</span>{" "}
                  <span>with {item.name}</span>
                </p>
                <p className="text-gray-800 text-xl">
                  {new Date().toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>

        ))}
      </div>

      {timeLine.length == 0 && (
        <div className="text-center justify-center items-center text-4xl font-bold mb-10">
          <h1>No data found</h1>
        </div>
      )}    
    </div>
  );
};

export default Timeline;