// function to take in 2 arrays
// returns true if every value in the array
// has its corresponding value squared in the second array.
// Frequency of values must be the same

// NIAVE SOLUTION WITH NESTED LOOPS
// Only 1 loop BUT using indexOf() is another loop iteration
// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;
//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) return false;
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// }

// O(n) time complexity solution
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }

    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

let arr1 = [1, 2, 3];
let arr2 = [4, 1, 9];

console.log("SAME FUNCTION", same(arr1, arr2));

// ANAGRAMS PROBLEM
// given 2 strings, determine and return true if the second string is an anagram of the first one
// example: iceman --> cinema

// function validAnagram(str1, str2) {
//   if (str1.length !== str2.length) return false;

//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};

//   for (let val of str1) {
//     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//   }

//   for (let val of str2) {
//     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//   }

//   for (let key in frequencyCounter1) {
//     if (!(key in frequencyCounter2)) {
//       return false;
//     }

//     if (frequencyCounter2[key] !== frequencyCounter1[key]) {
//       return false;
//     }
//   }

//   return true;
// }

// SECOND SOLUTION
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    // if letter exists in the object, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    // if cant find letter or letter is 0, then it is not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

console.log("validAnagram FUNCTION", validAnagram("iceman", "cinema"));
