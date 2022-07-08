import React from "react";

export default function Background() {
  return (
    <div style={{ height: 100}} className="bg-gray-700">
      <div style={{ height: "inherit"}} className="bg-purple-600 bg-opacity-100 ">100%</div>
      <div style={{ height: "inherit"}} className="bg-purple-600 bg-opacity-75 ">75%</div>
      <div style={{ height: "inherit"}} className="bg-purple-600 bg-opacity-50 ">50%</div>
      <div style={{ height: "inherit"}} className="bg-purple-600 bg-opacity-25 ">25%</div>
      <div style={{ height: "inherit"}} className="bg-purple-600 bg-opacity-0 ">0%</div>
    </div>
  );
}
