import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Grid from "../Grid/Grid";
import "./Game.css";

export default function Game() {
  const [board, setBoard] = useState([]);
  const [acrossclues, setAcrossClues] = useState([]);
  const [downclues, setDownClues] = useState([]);

  useEffect(() => {
    const date = "1979-10-10";
    fetch(`/creategame?date=${date}`).then((data) => {
      if (data.status === 200) {
        data.json().then((data) => {
          console.log(data);
          const twoDarr = [[]];
          let row = 0;
          for (let i = 0; i < data.data.grid.length; i++) {
            if (i !== 0 && i % 15 === 0) {
              twoDarr.push([]);
              row++;
            }
            const arr = [data.data.grid[i], data.data.gridnums[i]];
            twoDarr[row].push(arr);
          }
          setBoard([...board, twoDarr]);
          // console.log([...board, twoDarr]);
          // console.log(downclues);
          // massage data here, pass pop to grid, usecontext
          setAcrossClues([...acrossclues, data.data.clues.across]);
          setDownClues([...downclues, data.data.clues.down]);
          // console.log(board);
          // console.log(acrossclues);
          // console.log(downclues);
          //massage the data and push it to theboard 
        });
      }
    });
  }, []);

  useEffect(() => {
    console.log(downclues);
  }, [downclues]);
  // for loop board.answers.across
  // writing  2d array
  //map data

  return (
    <div className="gamepage">
      <h2>The Brooklyn Playbook Crossword</h2>
      <div className="link">
        <Link to="../">Home</Link>
        <Link to="../config">Settings</Link>
      </div>
      <div className="game">
        <Grid board={board} acrossclues={acrossclues} downclues={downclues} />
        <ol className="clues">
          {downclues.map((dclues) => (
            <li>{downclues}</li>
          ))}
        </ol>
        <ol className="clues">
          <div classname="clueconstaint">
            {acrossclues.map((aclues) => (
              <li>
                {acrossclues} + " ..."
                <br />
                <br />
              </li>
            ))}
          </div>
        </ol>
      </div>
    </div>
  );
}
