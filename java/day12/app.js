// fruits=["Banana","Orange","Apple","Mango"]
// console.log(fruits)
// fruits.push("NEW")
// console.log(fruits)

// a=fruits.push("NOVO")
// console.log(fruits)
// console.log("A",a);


// fruits=["Banana","Orange","Apple","Mango"]
// console.log(fruits)
// returnValue=fruits.pop() /*.pop vraca samo zadnji elemenet*/
// console.log(fruits)
// console.log(returnValue)

// fruits=["Banana","Orange","Apple","Mango"]
// stringOfFruits=fruits.join("-")
// console.log(stringOfFruits)

// fruits=["Banana","Orange","Apple","Mango"]
// fruits.shift()
// console.log(fruits)
// a=fruits.shift()
// console.log(a)

// fruits=["Banana","Orange","Apple","Mango"]
// fruits.unshift("NEW")
// console.log(fruits)
// a=fruits.unshift("NEW")
// console.log(a)

// fruits=["Banana","Orange","Apple","Mango"]
// nesto=[true,2,false,"sasdasd"]
// noviAr=fruits.concat(nesto,[2,"Novi","Pazar"])
// console.log(noviAr)

// fruits=["Banana","Orange","Apple","Mango"]
// fruits.splice(1,0,"NOVIII","NESTO")
// deletedItems=fruits.splice(1,0,"NOVIII","NESTO") /*moze i da macinje elemente i da dodaje - prvi broj sa pozicije sa koje brise a drugi broj koliko elemenata brise , moze da vraca izbrisane elemente*/
// console.log(deletedItems)

// fruits=["Banana","Orange","Apple","Mango"]
// a=fruits.slice(1,3)
// console.log(fruits)
// console.log(a)

// a=["Noodle","Pasta","IceCream"]
// b=["Fries","Ice-cream","Pizza"]
// nadjen=[];
// p=0;
// c=0;
// for(i=0;i<a.length;i++){
// p=0
//  for(j=0;j<b.length;j++){
//   if(a[i]===b[j]){
//    p++
//   }
//  }
//  if(p>0){
//   nadjen[c]=a[i];
//   c++
//  }
// }
// console.log(nadjen);

// fruits=["Banana","Orange","Apple","Mango"]
// for(el of fruits){
//  console.log(el)
// }

arr=[0,1,false,2,undefined,"",3,null]
neWArr=[]
j=0;
for(i=0;i<arr.length;i++){
 if(arr[i]==false || arr[i]==undefined || arr[i]==null){
  arr.splice(i,1,"Nesto")
 }
}
console.log(arr)