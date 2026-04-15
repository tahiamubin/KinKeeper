import { Handshake, Mail, PhoneIncoming, Video } from "lucide-react";
import React, { useContext } from "react";
import { FriendContext } from "../context/FriendContext";

const Timeline = () => {
  const { timeLine } = useContext(FriendContext);
  const icons = {
    Call: <PhoneIncoming />,
    Text: <Mail />,
    Video: <Video />
  }
  return (
    <div className="container mx-auto space-y-6 mb-10">
      
      <h1 className="text-4xl font-bold text-gray-700 mt-10  ">Timeline</h1>
      {
        timeLine.length == 0 && 
        <div className="text-center justify-center items-center text-4xl font-bold mb-10"> 
          <h1>No data found</h1>
        </div>
      }
      {/* sort */}

      {timeLine.map((item, index) => (
        <div key={index}>
          <div className="rounded-xl ">
            <div className="card w-full bg-base-100 card-xs shadow-sm p-2">
              <div className="card-body">
                <h2 className="card-title">
                {icons[item.type]}
                </h2>
                <p className="text-[#244D3F] text-2xl">
                  <span className="font-bold">{item.type}</span>{" "}
                  <span>with {item.name}</span>
                </p>
                <p className="text-gray-800 text-xl">{new Date().toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

    </div>
  );
};

export default Timeline;
