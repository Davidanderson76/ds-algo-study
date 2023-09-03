// SLIDING WINDOW
// involves creating a window that can either be an arry or a number
// from one position to another
// depending on a certain condition, the window either increases or closes
// and a new window is created.
// very useful for keeping track of a subset of data in an array/string/etc

// MaxSubArray
// function that takes in an array of integers and a number called n
// the function should calculate the maximum sum of n consecutive elements
// in the array

// BRUTE FORCE SOLUTION
// Time Complexity: O(n^2)
// function maxSubArraySum(arr, num) {
//   if (num > arr.length) return null;

//   let max = -Infinity;

//   for (let i = 0; i < arr.length - num; i++) {
//     temp = o;
//     for (let j = 0; j < num; j++) {
//       temp += arr[i + j];
//     }
//     if (temp > max) {
//       mex = temp;
//     }
//   }
//   return max;
// }

// SLIDING WINDOW APPROACH
function maxSubArraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (num > arr.length) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

let array = [1, 2, 5, 2, 8, 1, 5];
console.log("maxSubArraySum function -->", maxSubArraySum(array, 2));
