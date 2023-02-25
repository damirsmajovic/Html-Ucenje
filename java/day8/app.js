// a=parseInt(prompt("Unesite pocetnu vrednost"))
// b=parseInt(prompt("Unesite krajnu vrednost"))
// for(i=a;i<=b;i++){
//  console.log(Math.pow(i,3))
// }

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
// if(delioci==2){
//  console.log(i);
// }
// }

a=parseInt(prompt("Unesite pocetnu vrednost"))
b=parseInt(prompt("Unesite krajnu vrednost"))
for(i=a;i<=100;i++){
if(i%a==0 && i%b==0){
 console.log(i);
 break
}
}
// a=parseInt(prompt("Unesite broj slova"));
// b="";
// for(i=1;i<=a;i++){
// unos=prompt(`${i} , slovo`)
// b+=unos;
// }
// console.log(b);