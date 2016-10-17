/*Repeat a given string (first argument) num times (second argument). 
Return an empty string if num is not a positive number.*/


function repeatStringNumTimes(str, num) {
  
  var array = [];
  
  for (var i = 0; i < num; i++){
    
    array.push(str);
    
  }
  
return array.join("");

}

repeatStringNumTimes("abc", 3);