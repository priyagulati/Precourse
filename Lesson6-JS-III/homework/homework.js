// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array
  return (arr[0]);
}

function returnLast(arr) {
  // return the last item of the array
  return (arr[arr.length-1]);
}

function getArrayLength(arr) {
  // return the length of the array
  return (arr.length);
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  for (var i = 0; i < arr.length; i++)
  {
	arr[i] = arr[i] + 1;
  }
  
  return (arr);
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  arr.push(item);
  return (arr);
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  arr.unshift(item);
  return (arr);
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  var str = "";
  
  str = words[0];
  
  for (var i = 1; i < words.length; i++)
  {
	str = str + " " + words[i];
  }
  
  return (str);
	
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  for (var i = 0; i < arr.length; i++)
  {
	if (arr[i] == item)
	{
		return (true);
	}
  }
  
  return (false);
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  var sum = 0;
  
  for (var i = 0; i < numbers.length; i++)
  {
	sum = sum + numbers[i];
  }
  
  return (sum);
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  var avg = 0;
  
  for (var i = 0; i < testScores.length; i++)
  {
	avg = avg + testScores[i];
  }
  
  avg = avg / testScores.length;
  return (Math.round(avg));
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  var largest = -1;
  
  for (var i = 0; i < numbers.length; i++)
  {
	if (numbers[i] > largest)
	{
		largest = numbers[i];
	}
  }
  return (largest);
}

function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
  
  if (arguments.length == 0)
	return (0);
  
  var count = 1;
  
  for (var i = 0; i < arguments.length; i++)
  {
	count  = count * arguments[i];
  }
  
  return (count);
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber,
  multiplyArguments,
};
