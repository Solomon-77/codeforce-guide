/**
 * Given an array of integers and a number k, find the maximum sum of any contiguous 
 * subarray of size k.
 */

const arr = [2, 1, 5, 1, 3, 2]
const k = 3 // subarray must be this size for example if 3 -> [2, 1, 5], [1, 5, 1], and so on

function maxSubArray(arr, k) {
    let maxSum = 0
    let windowSum = 0

    for (let i = 0; i < 3; i++) {
        windowSum += arr[i]
    }

    maxSum = windowSum

    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }

    console.log(maxSum)
}

maxSubArray(arr, k)