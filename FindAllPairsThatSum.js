function FindAllPairsThatSum(arr,target){
  map={};
   results=[];
   for(let i=0; i<arr.length;i++){
    if (map[arr[i]] !== undefined) {
        results.push([map[arr[i]], arr[i]])
      } else {
        map[target - arr[i]] = arr[i];
      }
    }
    return results;

}
console.log(FindAllPairsThatSum([1,2,3,4,5,6,7,8,9],15));

const twoSum = (arr, target) => {
  let results = [];
  for (let i=0; i<arr.length; i++) {
    for (let j=i+1; j<arr.length; j++) {
      if (arr[j] === target - arr[i]) {
        results.push([arr[i], arr[j]])
      }
    }
  }
  return results;
}
console.log(twoSum([1,2,3,4,5,6,7,8,9],15));