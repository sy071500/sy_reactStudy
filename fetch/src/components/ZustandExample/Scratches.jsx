import React from "react";
import { useEffect } from "react";
//import { useRef } from "react";
import create from "zustand";

const useStore = create((set) => ({
  scratches: 0,
  addScratches: () => set((state) => ({ scratches: state.scratches + 1 })),
}));
export default function Scratches() {
  const addScratches = useStore((state) => state.addScratches);
  useEffect(() => {
    useStore.subscribe(
      (scratches) => {
        console.dir(`scratches: ${scratches.scratches}`)       
        if(scratches.scratches > 3){
            alert("too many...");
        }
      },
      (state) => state.scratches
    );
  }, []);
  return (
    <div>
      <br />
      <button onClick={addScratches}>Add scratches</button>
    </div>
  );
}
