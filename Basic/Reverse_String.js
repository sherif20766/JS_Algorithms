
/*Create a function to reverse the provided string*/


function reverseString(str) {
  var strSplit = str.split("");
  var reverse = strSplit.reverse();
  return reverse.join("");
}

reverseString("hello");
