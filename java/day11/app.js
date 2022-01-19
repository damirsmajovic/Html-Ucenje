// a=parseInt(prompt("Unesite broj elemenata"))
// b=[];
// sum=0;
// for(i=0;i<a;i++){
//  b[i]=parseInt(prompt(`Unesite ${i+1} element`));
// }
// for(i=0;i<a;i++){
//  sum+=b[i];
// }
//  console.log(b)
// console.log(sum)

arr=[2,12,1,7,19,74,23,4,3]
a=arr.length
max=arr[0];
for(i=0;i<a;i++){
if(arr[i]>max){
 max=arr[i]
}
}
console.log(max);