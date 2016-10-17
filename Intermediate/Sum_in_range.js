/*We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

NOTE: The lowest number will not always come first.*/


function sumAll(arr) {
 var answer = 0;
  for (var i = Math.min.apply(null, arr); i <= Math.max.apply(null, arr); i++){
    
    answer = answer + i;
    
  }
  return answer;
}

sumAll([5, 10]);
