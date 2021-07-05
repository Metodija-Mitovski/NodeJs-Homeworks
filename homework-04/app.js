//// Electronics shop
function getMoneySpent(keyboards, drives, budget) {
  let totalPrice = 0;

  keyboards.forEach((keyboard) => {
    for (let j = 0; j < drives.length; j++) {
      let currentPrice = keyboard + drives[j];
      if (currentPrice > totalPrice && currentPrice <= budget) {
        totalPrice = currentPrice;
      }
    }
  });

  if (totalPrice === 0) {
    return -1;
  }
  return totalPrice;
}

////////////////////////////////////////
//// hurdle race

function hurdleRace(playerJumpCapacity, hurdleHeights) {
  const tallestHurdle = Math.max(...hurdleHeights);

  if (playerJumpCapacity >= tallestHurdle) {
    return 0;
  }

  const vaksajnDoses = tallestHurdle - playerJumpCapacity;
  return vaksajnDoses;
}

//////////////////////////////////
/// Minimum Distance

function minimumDistances(a) {
  let arrValues = [];

  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      // console.log(a[i] == a[j]);
      if (a[i] == a[j]) {
        arrValues.push(j - i);
      }
    }
  }

  let minValue = Math.min(...arrValues);

  if (arrValues.length > 0) {
    return minValue;
  }
  return -1;
}
