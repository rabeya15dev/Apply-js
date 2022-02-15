/*function getFactorial(num) {
  let factorial = 1;
  let i = 1;
  while (i <= num) {
    factorial = factorial * i;
    i++;
  }
  return factorial;
}

const myFactorial = getFactorial(6);
console.log(myFactorial);
*/

// function getFactorial(num) {
//   let factorial = 1;
//   let i = num;
//   while (i >= 1) {
//     factorial = factorial * i;
//     i--;
//   }
//   return factorial;
// }
// const myFactorial = getFactorial(6);
// console.log("my factorial:", myFactorial);



// forvloop reverse
function getFactorial2(number) {
  let factorial = 1;
  for (let i = number; i >= 1; i--) {
    factorial = factorial * i;
  }
  return factorial;
}
const myFactorial = getFactorial2(6);
console.log("my factorial u:", myFactorial);