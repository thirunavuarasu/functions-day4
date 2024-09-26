(function(arr) {
    const isPalindrome = function(str) {
        return str === str.split('').reverse().join('');
    };
    const palindromes = arr.filter(function(str) {
        return isPalindrome(str);
    });
    console.log(palindromes);
})(['racecar', 'hello', 'level', 'world']);
