// arr=[45,4,9,16,25]
// novi=[]
// function a(a){
// if(a>20){
//  novi.push(a)
// }
// }
// arr.forEach(a)
// console.log(novi);


// s="DaNas je neSto lepo"
// novi=[]
// function a(a){
//  for(i=0;i<a.length;i++){
//   if(i%2==0 && a[i]!==" "){
//   novi.push(a[i].toLowerCase())
//  }
//  else if(a[i]!==" "){
//   novi.push(a[i].toUpperCase());
//  }
//  }
//  console.log(novi.join(""));
// }
// a(s)

const data=[NaN,0,15,false,-22,"",undefined,47,null]
br=0
function a(a){
 if(!Boolean(a)){
  br++
 }
}
data.forEach(a)
console.log(br);