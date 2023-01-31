import {react, useState} from "react";

function Cell({cellData, setBoardData, setClue, focusArea, setFocusArea}) {
    const { 
        row,
        column,
        letter,
        gridnums,
        across,
        down,
        acrossClue,
        focus,
        index,    
     } = cellData;
     const cellPadding = 0;
     const cellSize = 20;
     const cellInner = 10;
     const x = column * cellSize + cellPadding;
     const y = row * cellSize + cellPadding;
     const fill = letter === "." ? "black" :"white";
 
     const [direction, setDirection] = useState("across");

     function handleNextClick (direction) {
        if (direction === "across") {
            direction = "down";
        } else {
            direction = "across"
        }
        setDirection(direction);
     }


     return (
        <g 
            onClick={() => {
                setClue(cellData[direction].clue);
                console.log(cellData[direction].clue);
                setFocusArea({
                    index: index,
                    direction: direction
                });

                handleNextClick(direction);
            }}
        > 
            <rect
                x={x + cellPadding}
                y={y + cellPadding}
                width={cellInner}
                height={cellInner}
                fill={fillCell(letter,focus)}
                stroke="black"
                strokeWidth={cellSize/50}
                />
                {gridnums && (
                    <text
                        x={x + cellSize/2}
                        y={y + cellSize/2}
                        textAnchor="start"
                        dominantBaseline="hanging"
                        style={{fontSize: 25%}}
                        >
                            {letter}
                        </text>
                        </g>
                        );
                    }

                    function fillCell(letter, focus, index, setBoardData) {
                        let color = "white";

                        if (letter === ".") {
                            color = "black";
                        }
                        if (focus) {
                            color = "yellow";
                        }
                        return color;
                    }

                    export default Cell;
