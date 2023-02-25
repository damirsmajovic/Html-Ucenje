// a=[1,2,3,4]
// b=a.map((el)=>{
//  return el+10
// });
// console.log(b);

// numbers=[45,4,25,13,38,29]
// function kvadrat(a){
//  return a**2
// }
// b=numbers.map(kvadrat)
// console.log(b);

// numbers=[45,4,25,13,38,29]
// function doubles(a){
//  return a*=2
// }
// b=numbers.map(doubles)
// console.log(b);

// function makestring(a){
//  return a.toString()
// }
// b=numbers.map(makestring)
// console.log(b);

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
// console.log(b); ====> moj nacin
// =============================
// function capitalize(arr){
//  return arr.map((el)=>{
//   el=el.toLowerCase()
//   el=el[0].toUpperCase()+el.slice(1);
//   return el
//  })
// }
// console.log(capitalize(["Johm","JACOB","MaRko"])); 

// console.log(namesOnly([
//  {
//   name:"Damir",
//   age:20,
//  },
// {
// name:"Vahid",
//   age:20,
// },
// {
//  name:"Mezdid",
//   age:13,
// },
// {name:"Daris",
//   age:20,
//  }
// ]));
// function namesOnly(a){
// novi=[]
// return a.map((el)=>{
//  return el.name
// })
// }

// console.log(namesOnly([
//  {
//   name:"Damir",
//   age:20,
//  },
// {
// name:"Vahid",
//   age:30,
// },
// {
//  name:"Mezdid",
//   age:13,
// },
// {name:"Daris",
//   age:15,
//  }
// ]));
// function namesOnly(a){
// return a.map((el)=>{
//  return (`<h1>${el.name}</h1> <h2>${el.age}</h2>`)
// })
// }

// novi="Danas je lep dan"
// function skraceno(a){
//  a=a.split(" ")
//  c= a.map((el)=>{
//  return el[0]
//  })
//  c=c.join(".")
//  return c
// };
// console.log(skraceno(novi));

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