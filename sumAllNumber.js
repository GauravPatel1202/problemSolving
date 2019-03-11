function sumAll(arr){
    let sum=0
    let start=Math.min(arr[0],arr[1])
    let end =Math.max(arr[0],arr[1])
    for(i=start;i<=end;i++){
        sum+=i
    }
    return sum
}
console.log(sumAll([1,13]))
function sumAll2(arr){
   
    return arr.reduce((a, b) => {
        return a+b
       })
}
console.log(sumAll2([1,13,2,3]))
