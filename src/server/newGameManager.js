function getCrosswordData(date) {
    const [year, month, day] = date.split("-");
    return require(`./crosswords/${year}/${month}/${day}.json`);
}

exports.getCrosswordData = getCrosswordData;
