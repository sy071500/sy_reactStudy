import React from "react";
import create from "zustand";

const useStore = create((set) => ({
  fontSize: 14,
  increaseFontSize: () => set((state) => ({ fontSize: state.fontSize + 1 })),
  trigger: false,
  toggleTrigger: () => set((state) => ({ trigger: !state.trigger }), true),
}));

function FontLable() {
  const { fontSize, increaseFontSize, fontSizeLabel, toggleTrigger, trigger } =
    useStore(
      (state) => ({
        fontSize: state.fontSize,
        increaseFontSize: state.increaseFontSize,
        fontSizeLabel: state.fontSize + "px",
        trigger: state.trigger,
        toggleTrigger: state.toggleTrigger,
      }),
      //(oldState, newState) => oldState.trigger === newState.trigger
    );

  return (
    <>
      <div style={{ fontSize }}>Current font size: {fontSizeLabel}</div>
      <button onClick={increaseFontSize}>size up</button>
      <button onClick={toggleTrigger}>toggle: {trigger.toString()}</button>
    </>
  );
}

export default function Text() {
  const fontSize = useStore((state) => state.fontSize);
  return (
    <>
      <p style={{ fontSize }}>This text will increase in size too.</p>
      <FontLable />
    </>
  );
}
