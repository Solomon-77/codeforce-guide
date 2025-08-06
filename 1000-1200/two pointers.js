// Example Problem: Find 2 numbers that sum to 10 (sorted array)

const arr = [1, 2, 3, 5, 7, 8]; // sorted
let target = 10;

let left = 0
let right = arr.length - 1

while (left < right) {
    let sum = arr[left] + arr[right]

    if (sum === target) {
        console.log(arr[left], arr[right])
        break
    } else if (sum < target) {
        left++
    } else {
        right--
    }
}