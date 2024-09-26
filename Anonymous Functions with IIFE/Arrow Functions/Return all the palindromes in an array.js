const returnPalindromes = arr => {
    const isPalindrome = str => str === str.split('').reverse().join('');
    const palindromes = arr.filter(str => isPalindrome(str));
    console.log(palindromes);
};
returnPalindromes(['racecar', 'hello', 'level', 'world']);
