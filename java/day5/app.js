// a=2;
// switch(a){
// case 1:
// console.log("Slucaj je jedan")
// break
// case 2:
// console.log("Slucaj je dva")
// break
// case 3:
// console.log("Slucaj je tri")
// break
// default: 
// console.log("Pogresan unos")
// }
/*
a=prompt("Unesite broj dana")
switch(parseInt(a)){
case 1:
console.log("Danas je ponedeljak");
break;
case 2:
console.log("Danas je utorak");
break;
case 3:
console.log("Danas je sreda");
break;
case 4:
console.log("Danas je cetvrtak");
break;
case 5:
console.log("Danas je petak");
break;
case 6:
console.log("Danas je subota");
break;
case 7:
console.log("Danas je nedelja");
break;
default:
   console.log("Unet je pograsan broj");
}*/

a=prompt("Unesite broj izmedju 0 i 100");
switch(true){
case a>=0 && a<30:
console.log("Broj je low");
break;
case a<70:
console.log("Broj je medium");
break;
case a<=100:
console.log("Broj je low");
break;
default:
   console.log("Pogreasn unos")
}


