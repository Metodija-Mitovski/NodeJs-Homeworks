/// Designer PDF Viewer
function designerPdfViewer(givenHeights, word) {
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const givenWord = word.split("");
  let width = givenWord.length;
  let height = 0;
  givenWord.forEach((letter) => {
    const currIndexForHeight = letters.indexOf(letter);
    const currentHeight = givenHeights[currIndexForHeight];
    if (currentHeight > height) {
      height = currentHeight;
    }
  });

  return width * height;
}

///////////////////////////////////////////////
/// sales by match

function sockMerchant(n, ar) {
  let numberOfSocksByColor = {};

  ar.forEach((color) => {
    if (color in numberOfSocksByColor) {
      numberOfSocksByColor[color] = numberOfSocksByColor[color] + 1;
    } else {
      numberOfSocksByColor[color] = 1;
    }
  });

  let pairsForSum = [];

  for (let key in numberOfSocksByColor) {
    if (numberOfSocksByColor[key] % 2 === 0) {
      pairsForSum.push(numberOfSocksByColor[key] / 2);
    } else {
      pairsForSum.push((numberOfSocksByColor[key] - 1) / 2);
    }
  }

  let numberOfPairs = 0;

  pairsForSum.forEach((pair) => {
    numberOfPairs += pair;
  });

  return numberOfPairs;
}

////////////////////////////
/// Mars Exploration
function marsExploration(s) {
  const numberOfMessages = s.length / 3;
  let correctMessageOutput = "";
  let lettersChanged = 0;

  for (let i = 0; i <= numberOfMessages; i++) {
    correctMessageOutput += correctMessageOutput + "SOS";
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== correctMessageOutput[i]) {
      lettersChanged++;
    }
  }

  return lettersChanged;
}
