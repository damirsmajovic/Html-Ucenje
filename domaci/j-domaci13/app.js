otac=parseInt(prompt("Unesite godiste oca"))
sin=parseInt(prompt("Unesite godiste sina"))
counter=0;
// for(i=0;i<otac;i++){
//  if(otac/sin===2){
//   break
//  }
// otac--
// sin--
// counter++
// }
// console.log(`Otac je bio duplo stariji kad je imao ${otac} , a sin ${sin}`);
// console.log(counter);
razlika=otac-sin*2
console.log(Math.abs(razlika))