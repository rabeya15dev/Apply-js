let factorial = 1;
for (let i = 1; i <= 5; i++) {
  factorial = factorial * i;
  // }
  // // console.log(factorial);


  function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
      fact = fact * 1;
    }
    return fact;
  }
  var firstFactorial = factorial(7);
  console.log("factorial is:", firstFactorial);

  var secondFactorial = factorial(9);
  console.log("wow:", secondFactorial);



  function getFactorial(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
      factorial = factorial * i;
    }
    return factorial;
  }
  var firstFactorial = getFactorial(7);
  console.log("first factorial is:", firstFactorial);

  var secondFactorial = getFactorial(9);
  console.log("second factorial:", secondFactorial);