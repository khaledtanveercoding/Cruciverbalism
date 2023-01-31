import React from "react";
import downclues from "./Game"

export default function Grid {



}


function generateClueArray(clues) {
    return clues.map((clue) =>{
        const[num, clueString] = clue.split(".");
        return {
            num,
            clueString,
        }
    });
}


function generateClueMap(clues){
    return clues.reduce((acum, cur) => {
        const [num, clueString] = cur.split(".");
        acum[num]= clueString;
        return accum;
    }
    )
}