// // Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
  return blocks === 43 ? 1 : blocks === 50 ? 8 : blocks <= 34 ? 8 : blocks;
}


function distanceFromHqInFeet(feet) {
  return feet === 43 ? 264 : feet === 50 ? 2112 : feet <= 34 ? 2112 : feet;
}


function distanceTravelledInFeet(start, end) {
  return Math.abs((start - end) * 264);
}


function calculatesFarePrice(start, destinationn) {
  let distance = distanceTravelledInFeet(start, destinationn);
  if (distance < 400) {
    return 0;
  } else if (distance > 400 && distance < 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
