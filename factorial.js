function fucat(n){
  if(n==1){
    return 1
  }else{
    return n * fucat(n-1)
  }
  
}
console.log(fucat(3))
function fact1(n){
  let result=1;
for(var i=n; i>=1;i--){
    result *=i
}
return result
}
console.log(fact1(3))