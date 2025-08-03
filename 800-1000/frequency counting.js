// count the frequency of the characters

const arr = ['a', 'b', 'c', 'd', 'a', 'a', 'b']

const freq = {}

for (let i = 0; i < arr.length; i++) {
    const char = arr[i]
    freq[char] = (freq[char] || 0) + 1
}

console.log(freq)