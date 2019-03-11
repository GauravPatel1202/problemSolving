function diffArr(arr1,arr2){
   let result=[];
    for(var i=0; i<arr1.length;i++){
      if(arr2.indexOf(arr1[i])==-1){
       result.push(arr1[i])
      }
   }
   for(var j=0; j<arr2.length;j++){
    if(arr1.indexOf(arr2[j])==-1){
     result.push(arr2[j])
    }
 }
return result

}
console.log(diffArr([1,2,3,4],[1,3,5,6]))


function diffArr2(arr1,arr2){
    let result=[...arr1,...arr2];
    
    return result.filter(function(num){
         if(arr1.indexOf(num)==-1 || arr2.indexOf(num)==-1){
             return num
         }

    })
 
 }
 console.log(diffArr2([1,2,3,4],[1,3,5,6]))

        function diffArr3(arr1,arr2){
          return  arr1.concat(arr2).filter(function(num){
              if(arr1.indexOf(num)==-1 || arr2.indexOf(num)==-1){
             return num
         }
         })
         }
 console.log(diffArr3([1,2,3,4],[1,3,5,6]))