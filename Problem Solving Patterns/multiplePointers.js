// Creating multiple pointers or values that correspond to an index or position
// and move towards the begining, end, or middle based on a cartain condition
// VERY effecient for solving problems with minimal space complexity as well

// write a function that takes in a sorted array of integers
// the function should find the first pair where the sum is 0
// return an array that includes both values that sum to 0
// OR undefined if a pair does not exist

// NAIVE SOLUTION - BRUTE FORCE
// O(n^2)
// function sumZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// }

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

let arr = [-3, -2, -1, 0, 1, 2, 3];

console.log("SUMZERO FUNCTION", sumZero(arr));

// Count Unique Values
// function that accepts a sorted array
// returns the count of unique values in that array
// always sorted

// SOLUTION USING FREQUENCY COUNTER
// function countUniqueValues(arr) {
//   if (arr.length === 0) return 0;

//   let lookup = {};
//   let solution = [];

//   for (let val of arr) {
//     lookup[val] = (lookup[val] || 0) + 1;
//   }
//   for (let key in lookup) {
//     solution.push(key);
//   }
//   return solution.length;
// }

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

let arr2 = [1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 7];

console.log("countUniqueValues FUNCTION", countUniqueValues(arr2));
