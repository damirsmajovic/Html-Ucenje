// visina=prompt("Unesite visinu")
// console.log(visina)
// tezina=prompt("Unesite tezinu")
// console.log(tezina)
// bmi=tezina/Math.pow(visina,2);
// console.log(bmi);
// if(bmi<=18.5){
//  console.log("Underweight")
// }
// else if(bmi<=25){
//  console.log("Normal")
// }
// else if(bmi<=30){
//  console.log("Overweight")
// }
// else if(bmi>30){
//  console.log("Obesse")
// }


// broj=parseInt(prompt("Unesite broj"))
// p=1;
// while(p!==broj+1){
//  if(p%2!==0){
//  console.log(p);}
//  p++
// }


// p=prompt("Unesite broj")
// while(p!="STOP"){
// if(p>0){
//  console.log(`${p} Broj je pozitivan`)
// }
// else if(p<0){
//  console.log(`${p} Broj je negativan`)
// }
// else if(p==0){
//  console.log(`${p} Broj je jednak nuli`)
// }
// p=prompt("Unesite broj")
// }

// broj1=parseInt(prompt("Unesite pocetnu god"))
// broj2=parseInt(prompt("Unesite krajnu god"))
// while(broj1<=broj2){
// if(broj1%4==0){
//  console.log(broj1)
// }
// broj1++
// }


// factorijal=1;
// broj=parseInt(prompt("Unesite broj"))
// br=1;
// while(br<=broj){
//  factorijal*=br;
//  br++
// }
// console.log(factorijal)

unos=prompt("Unesite nesto")
newString= unos.slice(1)+unos[0];
console.log(newString)