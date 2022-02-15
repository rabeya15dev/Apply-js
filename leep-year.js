function isLeapYear(year) {
  if (year % 4 == 0) {
    return true;
  }
  else {
    return false;
  }
}

const myYear = 2087;
const ismyYearLeepYear = isLeapYear(myYear);
console.log('Is my yeasr leap Year:', ismyYearLeepYear);



const yourYear = 2224;
const isyourYearLeapYeAR = isLeapYear(yourYear);
console.log('is Leep year:', isyourYearLeapYeAR);