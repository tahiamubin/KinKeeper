import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { FriendContext } from "../context/FriendContext";

const Graph = () => {
  const { timeLine } = useContext(FriendContext);
  const data = [
    { name: "Text", value: timeLine.filter ((item) => item.type == "Text").length, fill: "#7E35E1" },
    { name: "Call", value: timeLine.filter ((item) => item.type == "Call").length, fill: "#244D3F" },
    { name: "Video", value: timeLine.filter ((item) => item.type == "Video").length, fill: "#37A163" },
  ];
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold  pb-12 pt-10">Friendship Analytics</h1>
      <div className="flex justify-center pb-10">
        <PieChart
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "80vh",
            aspectRatio: 1,
          }}
          responsive
        >
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            // Corner radius is the rounded edge of each pie slice
            cornerRadius="50%"
            fill="#8884d8"
            // padding angle is the gap between each pie slice
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          />

          <Legend></Legend>
          <Tooltip></Tooltip>
        </PieChart>
      </div>
    </div>
  );
};

export default Graph;
