// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
  if (input === null) 
    return []
  if (input.filter(n => n != 0).length == 0) 
    return[]
  let countOfPos = 0;
  let sumOfNeg = 0;
  for (const n of input) {
    if (n < 0) sumOfNeg+= n;
    if (n > 0) countOfPos += 1;
  }
  return [countOfPos, sumOfNeg]
}


// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function repeatStr (n, s) {
  let r = '';
  for (let i = 1; i <= n; i++) {
    r += s;
  }
  return r;
}



// Homework Exercises

// 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
// A: 'String'

let b = 'Thieves';
// A: 'String'

let c = [true, false, false];
// A: 'Array of booleans'

let d = {age: number};
// A: 'integer'

let e = [3]
// A: 'array with an integer'

let f;
// A: 'error'

let g = []
// A: 'emt array'



// 2. What are the compilation errors in each of the following code snippets?
let song: {
    title: string,
    releaseYear: number,
} = {
    title: 'Lose Yourself'
};
// A: 'indent, song function, the commas after string and number'

let prices = [100, 200, 300];
prices[0] = '$100';
// A: 'I think that is ok code wise, in my kingdom it would be a crime though.'

function myFunc(a: number, b: number): number {}
// A: 'Number would be a protected class. I think.'