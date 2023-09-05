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

// areThereDuplicates??

// Implement a function called, areThereDuplicates which accepts
// a variable number of arguments, and checks whether there are
// any duplicates among the arguments passed in.

function areThereDuplicates(...args) {
  args.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

console.log("areThereDuplicates FUNCTION", areThereDuplicates(1, 2, 3, 4));

// averagePair
// Write a function called averagePair.
// Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array where the average of the pair
// equals the target average.
// There may be more than one pair that matches the average target.

function averagePair(arr, target) {
  if (arr.length === 0) return false;
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let average = arr[left] + arr[right] / 2;
    if (average === target) {
      return true;
    } else if (average > target) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}

let arr3 = [1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 15];

console.log("averagePair FUNCTION", averagePair(arr3, 8));

// isSubsequence
// Write a function called isSubsequence which takes in two strings
// and checks whether the characters in the first string form a subsequence
// of the characters in the second string. In other words,
// the function should check whether the characters in the first string appear
// somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;

  if (!str1) return true;

  while (j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
      if (i === str1.length) {
        return true; // All characters of str1 are found in str2 in order
      }
    }
    j++;
  }

  return false; // Reached the end of str2 without finding str1 in order
}
console.log("isSubsequence FUNCTION", isSubsequence("abc", "abracadabra"));
