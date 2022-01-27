// a=[3,6,23,9,44,14,83,22,5,1]
// s=0;
// for(i=0;i<a.length;i++){
//  s+=a[i]
// }
// console.log(s/a.length)

a=[3,6,0,23,0,9,44,14,0,83,22,5,0,1]
b=[];
br=0
// for(i=0;i<a.length;i++){
//  if(a[i]!==0){
//   b[br]=a[i]
//   br++
//  }
// }
// for(i=b.length;i<a.length;i++){
// b[i]=0;
// }
// console.log(b)
// for(i=0;i<a.length;i++){
//  if(a[i]==0){
//   a.splice(i,1)
//   a.push(0)
//  }
// }
// console.log(a)

// arr=[3,6,23,9,44,14,0,83,22,5]
// max=arr[0]
// min=arr[0]
// for(i=0;i<arr.length;i++){
//  if(arr[i]>max){
//   max=arr[i]
//  }
//  else if(arr[i]<min){
//   min=arr[i]
//  }
// }
// console.log("Razlika je ",max-min)

// arr=[3,6,23,9,44,14,0,83,22,65]
// ima=0;
// for(i=0;i<arr.length;i++){
//  if(arr[i]===65 || arr[i]===77){
//   ima++
//  }
// }
// if(ima>0){
//  console.log("TRUE")
// }
// else{
//  console.log("Nema")
// }

// arr=[3,6,23,9,44,14,0,83,22,65,333,555]
// br=0;
// c=0;
// najveci=0;
// for(i=0;i<arr.length;i++){
//  c=br
//  tekuci=arr[i]
// while(tekuci>1){
//  tekuci=tekuci%10;
// br++
// }
// if(br>c){
//  najveci=arr[i]
// }
// }
// console.log(najveci)

// arr=[3,6,23,9,44,14,0,83,22,65,333,555]
// max=arr[0]
// for(el of arr){
//  if(Math.abs(el)>Math.abs(max)){
//   max=el
//  }
// }
// console.log(max)

arr=[3,6,23,9,44,14,0,83,22,65,333,555]
min1=arr[0]
min2=arr[0]
for(i=0;i<arr.length;i++){
 if(arr[i]<min1){
  min1=arr[i]
 }
 else if(arr[i]<min2 && arr[i]!==min1){
  min2=arr[i]
}}
console.log(`Prvi najmanji ${min1} a drugi najmani ${min2}`)
