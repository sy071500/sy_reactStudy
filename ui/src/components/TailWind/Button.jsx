import React from "react";
import { useState } from "react";
import "./button.css";

export default function Button() {
  const [isGreen, setIsGreen] = useState(true);

  return (
    <div>
      <button className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
        Click me
      </button>
      <br />
      <button
        className={`py-2 px-4 bg-${
          isGreen ? "green" : "purple"
        }-500 text-white font-semibold rounded-lg shadow-md hover:bg-${
          isGreen ? "green" : "purple"
        }-700 focus:outline-none focus:ring-2 focus:ring-${
          isGreen ? "green" : "purple"
        }-400 focus:ring-opacity-75`}
        onClick={() => setIsGreen((prev) => !prev)}
      >
        Click me
      </button>
      <br />
      <button className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
        Click me
      </button>
      <br />
      <button className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
        Click me
      </button>
      <br />
      <button className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
        Click me
      </button>
      <br />
      <button className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
        Click me
      </button>
      <br />
      <button className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
        Click me
      </button>
      <br />
      <button className="btn-blue">Click me</button>
    </div>
  );
}
