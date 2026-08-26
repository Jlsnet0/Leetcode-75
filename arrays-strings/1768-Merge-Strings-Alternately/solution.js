function mergeAlternaly(word1, word2){
    let result = '';
    const value = Math.max(word1.length, word2.length);
    for(let i = 0; i < value; i++ ){
        if(i < word1.length) result += word1[i];
        if(i < word2.length) result += word2[i];
    }
    return result;
}

console.log(mergeAlternaly('abc', 'pqr'));
console.log(mergeAlternaly('a', 'b'));
console.log(mergeAlternaly('a', 'bcdef'));