// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
  if (n > 1)
  {
  	n = n * nFactorial(n-1);
  }
  return (n);
}

 

function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  var cur = 1;
  var prev = 0;
  var temp = 0;

  while (n > 0)
  {
  	temp = cur;
  	cur =  prev + cur;
  	prev = temp;
  	n--; 
  }

  return (cur);
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};
