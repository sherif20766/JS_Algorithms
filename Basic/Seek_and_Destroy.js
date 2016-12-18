 /*You will be provided with an initial array (the first argument in the destroyer function), 
 followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.*/


 function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments, 1);
  var newArray = arr.filter(function(val) {
    if ( args.indexOf( val ) >= 0 ) {
      return false;
    } else {
      return true;
    }
  });
  return newArray;
} 


destroyer([1, 2, 3, 1, 2, 3], 2, 3);
