// a="    Damir   a";
// console.log(a[3])
// console.log(a.toUpperCase())
// console.log(a.toLowerCase())
// console.log(a.concat("Nesto"))
// console.log("Damir".indexOf("a"));
// console.log(a.includes("g"));  
// console.log(a.includes("D"));

// str="Apple, Banana, Kiwi";
// part=str.slice(7, 13);
// console.log("Str:",str);
// console.log("Part:",part);

// text="Apple,Water,Banana,Water"
// console.log(text.split(","));

// a=parseInt(prompt("Unesite pocetnu vrednost"))
// b=parseInt(prompt("Unesite krajnu vrednost"))
// c=0;
// for(i=a;i<=b;i++){
//  delioci=0;
// for(j=1;j<=i;j++){
// if(i%j===0){
//  delioci++
// }
// }
// if(delioci===2){
//  console.log(i);
// }
// }

 // fruits=["Banana","Orange","Apple","Mango"]
//   a=fruits.push("NOVO")
// console.log(fruits)
// console.log("A",a);

// fruits=["Banana","Orange","Apple","Mango"]
// fruits.shift()
// console.log(fruits)
// a=fruits.shift()
// console.log(a)

// fruits=["Banana","Orange","Apple","Mango"]
// nesto=[true,2,false,"sasdasd"]
// noviAr=fruits.concat(nesto,[2,"Novi","Pazar"])
// console.log(noviAr)

// fruits=["Banana","Orange","Apple","Mango"]
// fruits.splice(3,1,"NOVIII","NESTO")
// console.log(fruits);
// deletedItems=fruits.splice(1,4,"NOVIII","NESTO") /*moze i da macinje elemente i da dodaje - prvi broj sa pozicije sa koje brise a drugi broj koliko elemenata brise , moze da vraca izbrisane elemente*/
// console.log(deletedItems)

// arr=[[1,2,3],2]
// console.log(arr[0][0]);


// novo="";
// str="Damir"
// function solution(str){
//  for(i=str.length-1;i>=0;i--){
//   novo+=str[i]
//  }
//  console.log(novo);
//  return novo
// }
// solution(str)

// str="Danas je lep dan"
// function reverseWords(str){
//   b=[]
//   a=str.split(" ")
//   for(i=a.length-1;i>=0;i--){
//    b.push(a[i])
//   } 
//   console.log(b.join(" "));
// }
// reverseWords(str)

// function mojaF(){
//   let funA=6;
//   let forA=3;
//  for(let i=0;i<5;i++){
//   let forA=5;
//   console.log(forA);
//   console.log(funA);
//  }
// }
// mojaF()

// arr=["danas","je","lep","dan"]
// s=""
// for(i=0;i<arr.length;i++){
//  if(arr[i].length>0 && i!=arr.length-2){
//   s+=arr[i]+", "
//  }
//  else{
//   s+=arr[i]+" end "
//  }
// }
// console.log(s);
// ======================================================================================
// var student={
//  name:"Damir Smajovic",
//  sclass: "VI",
//  rollno: 12,
//  nestp:"nes"
// }
// const keys=Object.keys(student)
// br=0;
// // for(i=0;i<keys.length;i++)
// for(key of keys){
//  br++
// }
// console.log(br);

// var students=[{
//  name:"Damir Smajovic",
//  height: 120,
//  age: 18,
//  gender:"male"
// },
// {
//  name:"Vahid Gasanin",
//  height: 130,
//  age: 9,
//  gender:"male",
//  nes:"nes"
// },
// {
//  name:"Jovana L",
//  height: 150,
//  age: 28,
//  gender:"female"
// }
// ]

// function ispisi(arr){
// for(i=0;i<arr.length;i++){
// var keys=Object.keys(arr[i])
// br=0;
// for(el of keys){
//  br++
// }
// console.log(arr[i].name, br);
// }
// }
// ispisi(students)

// numbers=[45,4,25,13,38,29]
// function makestring(a){
//  return a.toString()
// }
// b=numbers.map(makestring)
// console.log(b);

// rec=["dSnDs","jE","lep"]

// function capitalize(a){
//  c=""
//  for(i=0;i<a.length;i++){
//  for(j=0;j<a[i].length;j++){
//    if(j==0){
//     c+=a[i][j].toUpperCase()
//    }
//    else{
//      c+=a[i][j].toLowerCase()
//    }
//  }
//  c+=" "
//  }
//  console.log(c);
// }
// capitalize(rec)

// rec=["dSnDs","jE","lep"]
// function capitalize(a){
//  c=""
//  for(i=0;i<a.length;i++){
//   if(i==0){
//    c+=a[i].toUpperCase()
//   }
//   else{
//    c+=a[i].toLowerCase()
//   }
//  }
//  return c
// }
// b=rec.map(capitalize)
// console.log(b);

// numbers=[45,4,9,16,25,13,38,60,52,29]
// b=numbers.map((el)=>{
//  if(el%2==0){
//   return true
//  }
//  else{
//   return false
//  }
// })
// console.log(b);


// numbers=[45,2,3,24,12,26,37]
// filtered=numbers.filter((el)=>{
//  return el%2==0
// })
// console.log(filtered);

//  function people(a){
// return a.filter((el)=>{
//  return el.member
// })
// }
// console.log(people([
//  {name:"Vahid", member:true},
//  {name:"Tarik", member:false},
//  {name:"Medzid", member:true},
//  {name:"Damir", member:true},
//  {name:"Daris", member:false}
// ]));

// a=["dog","wolf","cat","mouse","camp"]
// function filtered(a){
//  return a.filter((el,i)=>{
//   return i%2==0
//  })
// }
// console.log(filtered(a));

// numbers=[45,2,3,6,22,35]
// isAllhigh=numbers.every((el)=>{
//  return el>1
// })
// console.log(isAllhigh);

// numbers=[44,2,4,6,22,34]
// isAllhigh=numbers.every((el)=>{
//  return !(el%2)
// })
// console.log(isAllhigh);

// people=([
//  {name:"Vahid", member:true},
//  {name:"Tarik", member:false},
//  {name:"Medzid", member:true},
//  {name:"Damir", member:true},
//  {name:"Daris", member:false}
// ]);
// b=people.every((el)=>{
//  return el.member
// })
// console.log(b);

// numbers=[45,4,7,25,7]
// isAnyHigh=numbers.some((el)=>{
//  return el%2!==0
// })
// console.log(isAnyHigh);

// =================================================================================

// const numbers=[45,2,3,6,45,22,112,5,35]
// const b=numbers.indexOf(45)
// console.log(b);

// const numbers=[45,8,3,6,45,22,112,5,35]
// const a=numbers.find((el)=>{
// return el%2===0
// })
// console.log(a);

// el=document.getElementById("main")
// console.log(el);

// const el=document.querySelector("div")
// el.innerText="Damir"
// console.log(el);
// el.style.backgroundColor="red"

// const main=document.getElementById("main")
// const noviel=document.createElement("h1")
// noviel.innerText="Novi El"
// main.appendChild(noviel)

// async function GetData() {
//   novi = [];
//   main = document.getElementById("main");
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const responseJson = await response.json();
//     console.log(responseJson);
//     for (i = 0; i < responseJson.length; i++) {
//       novi.push(responseJson[i].name);
//     }
//     for (i = 0; i < novi.length; i++) {
//       const noviel = document.createElement("p");
//       noviel.innerText = novi[i];
//       main.appendChild(noviel);
//     }
//     console.log(novi);
//   } catch (err) {
//     console.log(err);
//   }
// }
// GetData();

// const sad=document.getElementById("main")
// sad.classList.add(nesto)

// function klik(){
//  console.log("U clicked something");
// }
// function hover(){
//  console.log("hover");
// } 
// function dugme(){
// novo = document.getElementById("nesto");
// console.log("dugme");
// }

// const el=document.querySelector("button")
// el.addEventListener("click",()=>{
//  console.log("You clicked");
// })

//  const el=document.querySelector("button")
// el.addEventListener("click",(event)=>{
//  console.log("You clicked");
//  console.log(event);
// })

// const inp=document.getElementById("name")
// inp.addEventListener("change",inputchanger)
// console.log(inp);
// function inputchanger(){
//  console.log("U changed");
//  console.log(inp.value);
// }

// function numberOfPairs(gloves)
// {
//   for(p=0;p<gloves.lenght;p++){
//     for(k=0;k<gloves[p].lenght;k++){
//       if(gloves[p][k]==","){
//         gloves[p]==""
//       }
//     }
//   }
//    a=0
//   for(i=0;i<gloves.length;i++){
//     for(j=i;j<gloves.length;j++){
//       if(gloves[i]==gloves[j] && gloves[j].length!=0){
//         a++
//         gloves[i]=null
//       }
//     }
//   }
//   if(a<2){
//     a=0
//   }
//   else{
//     a=a/2
//   }
//   console.log(a);
// }

// k=["red","red","blue","blue",",,,,,,",",,,,,,"]

// numberOfPairs(k)


// function sumNoDuplicates(numList) {
// var n=[];
//   var sum=0
//   for(i=0;i<=numList.length;i++){
//     n.push(numList[i])
//   }
//   for(i=0;i<=numList.length;i++){
//     for(j=1;j<=n.length-1;j++){
//       // console.log(numList[i]);
//       // console.log(n[j]);
//       if(numList[i]==n[j]){
//         // console.log(numList[i]);
//         n[j]=0
//       }
//     }
//   }
//   for(i=0;i<=n.length;i++){
//     console.log(n[i]);
//     sum+=n[i]
//   }
// //  console.log(sum);
// }
// a=[1,1,2,2,3,3]
// sumNoDuplicates(a)

// function sumNoDuplicates(numList) {
//   temp=0
//   var sum=0
//   for(i=0;i<numList.length;i++){
//     if(numList[i].length>1){
//       sumNoDuplicates(numList[i])
//     }
//     temp=numList[i]
//     sum+=numList[i]
//     for(j=0;j<numList.length;j++){
//       if(temp==numList[j]){
//         numList[j]=0
//       }
//     }
//   }
//   console.log(sum);
// }

// var a=[1,1,2,2,3,3,3]

// console.log(a);
// sumNoDuplicates(a)

// function numberToPower(number, power){
//   t=number
//   if(power>0){
//     for(i=1;i<power;i++){
//     number*=t
//     }
//   }
//   else{
//     console.log(number);
//   }
// console.log(number);
// }
// numberToPower(10,4)

// function indexOf(head, value) {
//   if(head==null){
//     return -1
//   }
//   else{
//  console.log(head.indexOf(value));  }
  
// }
// a=[1,2,3,3,4]
// indexOf(a,3)

// function indexOf(head, value) {

//   if(head==null){
//     console.log(-1);
//   }
//   else{
//     for(i=0;i<head.length;i++){
//       if(head[i]==value){

//         console.log(i);
//       }
//     }
//   }
  
// }

//  a=[1,2,3,3,4,"17"]
// indexOf(a,"17")

function spinWords(string){
  a=string.split(" ")
  for(i=0;i<a.length;i++){
    console.log(a[i]);
    n=""
    p=a[i]
    if(p.length>=5){
      for(j=p.length-1;j>=0;j--){
       n+=p[j]
      }
      a[i]=n
    }
  }
 a= a.join(" ")
  console.log(a);
}
a="Welcome today"
spinWords(a)