
b={
   a1: "a",
   methed:()=>{
    console.log(this)
   }
}
b.methed()
a={
    a1: "b",
    methed:function(){
     console.log(this)
    }
 }
 a.methed()
