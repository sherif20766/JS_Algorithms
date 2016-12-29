
function pairElement(str) {
 
  var paired = [];
  var lookUP = function(variable){
   
   switch(variable){
    case "A":
      paired.push(["A","T"]);  
      break;
    
     case "G":
      paired.push(["G","C"]);
      break;
    
     case "C":
       paired.push(["C","G"]);
       break;   
     
     case "T":
      paired.push(["T","A"]);
      break;   
    }
   
 };

  for(var i=0; i<str.length;i++){
    lookUP(str[i]);
  }
  return paired;
  
}

pairElement("GCG");
