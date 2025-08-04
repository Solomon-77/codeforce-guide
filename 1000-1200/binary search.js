/**
 * Given an array of integers 1, 2, 3, 4, 5, 6, 7, 8
 * find the index of the number 7 using binary search
 * 
 * Target: 7
 * Output: 6
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8]
const target = 7

function binarySearch(target) {
    let start = 0
    let end = arr.length - 1

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)

        if (arr[mid] === target) {
            return console.log(mid)
        } else if (arr[mid] < target) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
}

binarySearch(target)