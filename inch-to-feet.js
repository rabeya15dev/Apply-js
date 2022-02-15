
function inchToFeet(inches) {
  var feet = inches / 12;
  return feet;
}



var myinches = 132;
var feet = inchToFeet(myinches);
console.log('myInches in feet', feet);



var dadiInches = 145;
var feet = inchToFeet(dadiInches);
console.log('dadi inches in feet', feet);


var naniInches = 150;
var feet = inchToFeet(nanaInches);

var nanaInches = 165;
var feet = inchToFeet(nanaInches);



// aber

//  mile to km

function mileToKilomerter(miles) {
  var km = miles * 1.60934;
  return km;
}
var marathon = mileToKilomerter(26.2);
console.log("marathon in km:", marathon);