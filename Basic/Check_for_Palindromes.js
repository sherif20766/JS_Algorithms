/*Return true if the given string is a palindrome. Otherwise, return false.

NOTE: A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.*/

function palindrome(str) {
 str = str.replace(/[^A-Za-z0-9]/g, '');
  
 str = str.toLowerCase().split("");
 var revStr = str.slice().reverse().join("");
  
  
 return str.join("") === revStr;

}

palindrome("race car");
