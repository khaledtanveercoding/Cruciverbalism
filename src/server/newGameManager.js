function getCrosswordData(date) {
  const [year, month, day] = date.split("-");
  crossword = require(`./crosswords/${year}/${month}/${day}.json`); //save as a variable to feed into a new function
  return crosswordMapper(crossword);
}

//bubbling up
function crosswordMapper(crossword) {
  //server stuff
}

exports.getCrosswordData = getCrosswordData;
