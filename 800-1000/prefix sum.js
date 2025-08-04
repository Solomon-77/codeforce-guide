const arr = [3, 6, 2, 4, 8]
let prefixSum = []

prefixSum[0] = arr[0]

for (let i = 1; i < arr.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i]
}

console.log(prefixSum) // Output: [ 3, 9, 11, 15, 23 ]