import { useRecoilState } from "recoil";
import React from "react";
import { fontSizeState } from "./store";

export default function Text() {
    const [fontSize, setFontSize] = useRecoilState(fontSizeState);
    return <p style={{fontSize}}>This text will increase in size too.</p>;
  }