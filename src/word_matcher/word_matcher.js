function wordMatcher(secretWord, guessTry) {
  // Iteratate over guess try word
  const characterMatched = {};
  for (let i = 0; i < guessTry.length; i++) {
    const character = guessTry[i];
    // green case
    if (secretWord[i] === character) {
      characterMatched[i] = { color: "green", character };
      continue;
    }
    // yellow case
    if (secretWord.includes(character)) {
      characterMatched[i] = { color: "yellow", character };
      continue;
    }
    // by default is gonna be gray
    characterMatched[i] = { color: "gray", character };
  }
  return characterMatched;
}

module.exports = wordMatcher;
