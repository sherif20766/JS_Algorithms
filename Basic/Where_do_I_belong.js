/*Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. 
The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
*/

function getIndexToIns(arr, num) {
  var merged = arr.concat(num).sort(function(a, b){return a-b;});
  return merged.indexOf(num);
}

getIndexToIns([2, 5, 10], 15);