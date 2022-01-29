
// The most "popular" way of reversing a string in JavaScript is the following code fragment, which is quite common
function reverseString(str) {
    return str.split('').reverse().join('');
   }
  let reverse= reverseString('Faisal Ahmed'); // "gnirts"
  console.log(reverse);


//   Use .split to go from strings to an array of the split substrings:
var s = "one, two, three, four, five"
s.split(", "); // ["one", "two", "three", "four", "five"]
// Use the array method .join to go back to a string:
s.split(", ").join("--"); // "one--two--three--four--five

//   Use charAt() to get a character at the specified index in the string.
var string = "Hello, World!";
console.log( string.charAt(7) ); // "o"
// Alternatively, because strings can be treated like arrays, use the index via bracket notation.
var string = "Hello, World!";
console.log( string[4] ); // "o"
// To get the character code of the character at a specified index, use charCodeAt().
var string = "Hello, World!";
console.log( string.charCodeAt(4) ); // 11

console.log('qwerty'.toUpperCase()); // 'QWERT
console.log('QWERTY'.toLowerCase()); // 'qwerty'
console.log("abc".repeat(3)); // Returns "abcabcabc

// Convert to Locale Date String
var date1 = new Date();
console.log(date1.toLocaleDateString());