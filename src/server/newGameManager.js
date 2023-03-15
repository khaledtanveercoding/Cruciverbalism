function getCrosswordData(date) {
  const [year, month, day] = date.split("-");
  const crossword = require(`./crosswords/${year}/${month}/${day}.json`); //save as a variable to feed into a new function
  return crosswordMapper(crossword);
}

//bubbling up
function crosswordMapper(crossword) {
  //server stuff run through cell data
  //cell data grid nums the clues 
  console.log(crossword);
  return crossword;
}

exports.getCrosswordData = getCrosswordData;
