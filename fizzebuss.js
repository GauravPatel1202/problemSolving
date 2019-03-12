(function(){
    for(let i=0;i<100;i++){
    if(i%15==0){
     console.log("fussbuss" +i);
    }else if(i%3==0){
     console.log("fuss" + i);
    }else if(i%5==0){
        console.log("buss" + i);
    };
  }

})()

function fucat(n){
  if(n==1){
    return 1
  }else{
    return n * fucat(n-1)
  }
  
}
console.log(fucat(3))