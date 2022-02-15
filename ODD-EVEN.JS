// const number = 4;
// const reminder = number % 2;
// console.log(reminder == 0);
// console.log(number%2 == 0);


function isEven(number) {
  if (number % 2 == 0) {
    return true;
  }
  return false;
}

const myNuymber = 1641;
const ismyNumberEven = isEven(myNuymber);
console.log('is my number:', ismyNumberEven);

const herNumber = 1892;
const isHerumberEven = isEven(herNumber);

console.log('is her number:', isHerumberEven);


// Is ODD

function isOdd(number) {
  if (number % 2 != 0) {
    return true;
  }

  return false;
}

const ismyNumberOdd = isOdd(myNuymber);
console.log('is my number ODD:', ismyNumberOdd);

const isherNumberodd = isOdd(herNumber);
console.log('is her number Odd:', isherNumberodd);