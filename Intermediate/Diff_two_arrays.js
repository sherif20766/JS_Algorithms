/*Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
In other words return the symmetric difference of the two arrays.*/

function diffArray(arr1, arr2) {
  var newArr = (arr1.concat(arr2)).sort(function(a,b){return a-b;});
  var answer = [];
  
  for(var i=0;i<newArr.length;i++){
        
   if(newArr.indexOf(newArr[i]) == newArr.lastIndexOf(newArr[i])){
     answer.push(newArr[i]);   
   }  
  
  }
  
  return answer;
}
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
