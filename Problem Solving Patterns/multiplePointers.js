// Creating multiple pointers or values that correspond to an index or position
// and move towards the begining, end, or middle based on a cartain condition
// VERY effecient for solving problems with minimal space complexity as well

// write a function that takes in a sorted array of integers
// the function should find the first pair where the sum is 0
// return an array that includes both values that sum to 0
// OR undefined if a pair does not exist

// NAIVE SOLUTION - BRUTE FORCE
// O(n^2)
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// function sumZero(arr) {}

let arr = [-3, -2];

console.log("SUMZERO FUNCTION", sumZero(arr));
