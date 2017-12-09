//Do not change any of the function names

function multiplyByTen(num) {
  // return num after multiplying it by ten
  // code here
  let multiply =num*10;
  return multiply;
}
 

function subtractFive(num) {
  // return num after subtracting five
  // code here
  let subtract=num-5;
  return subtract;
}

function areSameLength(str1, str2) {
  // return true if the two strings have the same length
  // otherwise return false
  // code here
  if(str1.length===str2.length){
      return true;
  }
  return false;
}

function areEqual(x, y) {
  // return true if x and y are the same
  // otherwise return false
  // code here
  if (x == y){
    return true;
  }
  return false;
}


function lessThanNinety(num) {
  // return true if num is less than ninety
  // otherwise return false
  // code here
  if(num<90){
    return true;
  }

  return false;
}
  

function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false
  // code here
  if(num>50){
    return true;
  }
  return false;
}

function add(x, y) {
  // add x and y together and return the value
  // code here
  let sum =x+y;
  return sum;
}

function subtract(x, y) {
  // subtract y from x and return the value
  // code here
  let sub=x-y;
  return sub;
}

function divide(x, y) {
  // divide x by y and return the value
  // code here
  let div=x/y;
  return div;
}

function multiply(x, y) {
  // multiply x by y and return the value
  // code here
  let mul=x*y;
  return mul;
}

function getRemainder(x, y) {
  // return the remainder from dividing x by y
  // code here
  let rem=x%y;
  return rem;
}

function isEven(num) {
  // return true if num is even
  // otherwise return false
  // code here
  if(num%2===0){
    return true;
  }
  return false;
}

function isOdd(num) {
  // return true if num is false
  // otherwise return false
  // code here
  if(num%2!=0){
    return true;
  }
  return false;
}

function square(num) {
  // square num and return the new value
  // code here
  let a=num*num;
  return a;
}

function cube(num) {
  // cube num and return the new value
  // code here
  let a=num*num*num;
  return a;
}

function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  // code here
  let a=Math.pow(num,exponent);
  return a;
}

function roundNumber(num) {
  // round num and return it
  // code here
  let a=Math.round(num);
  return a;
}

function roundUp(num) {
  // round num up and return it
  // code here
  let a =Math.ceil(num);
  return a;
}

function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here
  let a =str+'!';
  return a;
}

function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  // code here
  let fullName=firstName + ' ' + lastName;
 return fullName;
}

function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here
 let greeting='Hello' + ' ' +  name + '!';
  return greeting;
}


// If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  // code here
  let area=length*width;
  return area;
}

function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  // code here
let area=0.5*base*height;
return area;
}

function getCircleArea(radius) {
  // return the rounded area of the circle given the radius
  // code here
  let pie=3.14;
  let area=pie*radius*radius;
  area=Math.round(area);
  return area;
}

function getRectangularPrismVolume(length, width, height) {
  // return the volume of the 3D rectangular prism given the length, width, and height
  // code here
  let area=length*width*height;
  return area;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
