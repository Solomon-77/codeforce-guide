// coin change

const coins = [25, 10, 5, 1]

let amount = 34
let count = 0

for (let i = 0; i < coins.length; i++) {
    const coin = coins[i]

    while (amount >= coin) {
        amount -= coin
        count++
    }
}

console.log(count) // Output: 6