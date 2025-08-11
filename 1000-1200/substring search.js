// substring search (naive approach)

function substringSearch(text, pattern) {
    for (let i = 0; i <= text.length - pattern.length; i++) {
        let match = true;
        for (let j = 0; j < pattern.length; j++) {
            if (text[i + j] !== pattern[j]) {
                match = false;
                break;
            }
        }
        if (match) return i; // return starting index
    }
    return -1;
}

console.log(substringSearch("hello", "ll")); // 2