// String hash

function simpleHash(str) {
    let hash = 0;

    for (let i = 0; i < str.length; i++) {
        hash = (hash * 31 + str.charCodeAt(i)) % 1000000007; // mod keeps it in range
    }

    return hash;
}

console.log(simpleHash("hello")); // e.g. 99162322
