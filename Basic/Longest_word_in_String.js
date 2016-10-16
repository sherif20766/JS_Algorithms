/* Return the length of the longest word in the provided sentence. */

 *function findLongestWord(str) {
  var array = [];
  str = str.split(" ");
  
  for (var i = 0; i < str.length; i++){
   array.push(str[i].length);
    
  }
  
  return Math.max.apply(null, array);
}

findLongestWord("The quick brown fox jumped over the lazy dog");
