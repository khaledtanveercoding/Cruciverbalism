import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css"


export default function Landing() {
  return (
    <div className="landing">
      <div className="option">
        <Link to={"config"}>New Game</Link>
      </div>
      <div className="option">
        <Link to={"game"}>Join Game</Link>
      </div>
    </div>
  );
}
