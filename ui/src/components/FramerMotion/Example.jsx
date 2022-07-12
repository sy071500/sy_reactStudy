import React from "react";
import Keframes from "./Keframes";
import Scale from "./Scale";

export default function Example() {
  return (
    <div>
      <div style={{ position: "absolute", top: 100, left: 300 }}>
        <Keframes />
      </div>
      <div style={{ position: "absolute", top: 300, left: 300 }}>
        <Scale />
      </div>
    </div>
  );
}
