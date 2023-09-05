// RECURSION
// what ius recursion??
// a process that calls itself
// function call that calls itself --
// it is everywhere
// we wil see it more with more complex data structures
// its sometimes a cleaner alternative to iteration

// Base Case
// condition where the recursion ends

// Different Input
// each call with a different piece of data

// Where things go wrong?
// - no base case
// - forgetting to return or returning the wrong thing
// - STACK OVERFLOW! = too many calls in the stack - no stopping

function countDown(num) {
  if (num <= 0) {
    console.log("All Done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

// countDown(10);

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

// console.log("sumRange", sumRange(5));

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

// console.log("factorial", factorial(5));

// HELPER METHODS
