function rotation(arr,d,callback){
 
 for(i=0;i<d;i++){
    callback(arr)
 }
 console.log(arr)

}
function rightRotatebyOne(arr){
    var temp = arr[arr.length-1], i; 
    for (i = arr.length - 1; i < 0; i--) 
        arr[i] = arr[i -1]; 
  
    arr[i] = temp; 
 
}
function leftRotatebyOne(arr){
    var temp = arr[0], i; 
    for (i = 0; i < arr.length - 1; i++) 
        arr[i] = arr[i + 1]; 
  
    arr[i] = temp; 
}
rotation([1,2,3,4,5],4,leftRotatebyOne)