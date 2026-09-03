function gcdOfStrings(str1, str2){
    if(str1 + str2 !== str2 + str1) return '';
    function gcd(a, b){
        if(b === 0) return a;
        return gcd(b, a % b)
    }
    const n = gcd(str1.length, str2.length);
    return str1.slice(0, n);
}



console.log(gcdOfStrings('ABCABC', 'ABC'));
console.log(gcdOfStrings('ABABAB', 'ABAB'));
console.log(gcdOfStrings('LEET', 'CODE'));
console.log(gcdOfStrings('AAAAAB', 'AAA'));


