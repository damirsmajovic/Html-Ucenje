// var nesto=function(){
//  console.log("Hello");
// }
// nesto()

// const numbers=[45,2,3,6,45,22,112,5,35]
// const b=numbers.indexOf(45)
// console.log(b);

// const numbers=[45,2,3,6,45,22,112,5,35]
// const a=numbers.find((el)=>{
// return el%4===0
// })
// console.log(a);

const numbers=[45,2,3,6,45,22,112,5,35]
const b=numbers.includes(9)
console.log(b);

// function gridMap(fn,a) {
//   a.forEach((el)=>{
//     return el.forEach((t)=>{
//       return t*2
//     })
//   })
// }
// console.log(gridMap(numbers));

rec="danas je lep dan"
// function shifter(s){
//  s=s.split(" ")
//   br=0
//   slova=["H","I","N","O","S","X","Z","M","W"]
//    s.map((el)=>{
//    return tacnost=el.map((elem)=>{
//       return elem.some((k)=>{
//         k==t
//       })
//       if(tacnost==true){
//         br++
//       }
//       })
//     })
//    return br
//   }

function shifter(s){
s=s.split(" ");
  slova=["H","I","N","O","S","X","Z","M","W"]
  k="";
br=0;
ima=s.map((element)=>{
   for(i=0;i<element.length;i++){
 slova.find((ele)=>{
    if(element[i]==ele.toLowerCase()){
      br++
      k+=element[i]
    }
  })
  }
  return 
})
console.log(br,k);
}
shifter(rec)
// // console.log(shifter(rec));

// a=["Danas","je","lep"]
// b=a.map((el,i)=>{
//   return console.log(el[i]);
//   })

// console.log(b);

// function shifter(a){
//   slova=["H","I","N","O","S","X","Z","M","W"]
// br=0;
//   b=a.split(" ")
//   for(i=0;i<b.length;i++){
//    for(j=0;j<b[i].length;j++){
//       for(c=0;c<slova.length;c++){
//         if(b[i][j]==slova[c].toLowerCase()){
//           br++
//         }
//       }
//     }
//   console.log(br);
// }
// }
// shifter(rec)