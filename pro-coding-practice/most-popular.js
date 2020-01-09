function mostPopular(letters) {
  let letterObj = {};
  let highScore = 0;
  let highestScoreLetter;

  for (let letter of letters) {
    (letter in letterObj) ? letterObj[letter]++ 
                          : letterObj[letter] = 1;

    if (letterObj[letter] > highScore) {
      highScore = letterObj[letter];
      highestScoreLetter = letter;
    }
  }
  return highestScoreLetter;
}
