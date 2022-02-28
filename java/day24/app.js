// var nesto=function(){
//  console.log("Hello");
// }
// nesto()

// const numbers=[45,2,3,6,45,22,112,5,35]
// const b=numbers.indexOf(45)
// console.log(b);

// const numbers=[45,2,3,6,45,22,112,5,35]
// const a=numbers.find((el)=>{
// return el%2===0
// })
// console.log(a);

// const numbers=[45,2,3,6,45,22,112,5,35]
// const b=numbers.includes(9)
// console.log(b);
// function gridMap(fn,a) {
//   a.forEach((el)=>{
//     return el.forEach((t)=>{
//       return t*2
//     })
//   })
// }
// console.log(gridMap(numbers));

rec="danas je lep dan"
function shifter(s){
 s=s.split(" ")
  br=0
  slova=["H","I","N","O","S","X","Z","M","W"]
   s.map((el)=>{
    tacnost=el.some((t)=>{
      return slova.some((k)=>{
        k==t
      })
      if(tacnost==true){
        br++
      }
      })
    })
   return br
  }


console.log(shifter(rec));