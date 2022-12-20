import React from "react";

export default function Grid() {
  let hold = [];
  let x = 0;
  let y = 0;
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      hold.push(
        <rect x={x} y={y} width="20" height="20" stroke="black" fill="white" />
      );
      x += 20;
    }
    x = 0;
    y += 20;
  }
  return (
    <svg width="328" height="350">
      {hold}
    </svg>
  );
}
