function numberToRoman(input){
    var romanNumber={
        M:1000,
        CM:900,
        D:500,
        CD:400,
        C:100,
        XC:90,
        L:50,
        XL:40,
        X:10,
        IX:9,
        V:5,
        IV:4,
        I:1,
     }
    romanString=''
    for( let key in romanNumber ){
      while(input >= romanNumber[key]){
          romanString+=key;
          input -=romanNumber[key]
        }
    }
    return romanString

}
console.log(numberToRoman(11111015));