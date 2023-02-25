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
//   if( a[i]!==" "){
//   novi.push(a[i].toLowerCase())
//  }
//  else {
//   novi.push(a[i]);
//  }
//  }
//   novi[0]=novi[0].toUpperCase()
//  console.log(novi.join(""));
// }
// a(s)

const data=[NaN,0,15,false,-22,"",undefined,47,null]
br=[]
function a(a){
 if(!Boolean(a)){
  br.push(a)
 }
}
data.forEach(a)
console.log(br);