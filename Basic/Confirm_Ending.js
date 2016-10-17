/*Check if a string (first argument, str) ends with the given target string (second argument, target),

without using .endsWith()*/

function confirmEnding(str, target) {
  
  return str.substring((str.length), (str.length - target.length)) === target;
}

confirmEnding("Open sesame!", "same!");
