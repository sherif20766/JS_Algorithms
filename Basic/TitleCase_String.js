/* Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.*/


function titleCase(str) {
  var array = [];
  str = str.toLowerCase().split(" ");
  
  for (var i=0;i<str.length;i++){
    array.push(str[i][0].toUpperCase() + str[i].slice(1));
  }
 return array.join(" ");
  
}

titleCase("I'm a little tea pot");
