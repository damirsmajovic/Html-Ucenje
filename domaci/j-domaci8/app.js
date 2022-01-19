// rec=prompt("Unesite recenicu");
// duzina=rec.length
// console.log(duzina)
// razmak=" ";
// s=rec[0];
// console.log(s.toUpperCase);
// // rec.charAt(0).toUpperCase();
// for(i=0;i<duzina;i++){
//  if(rec[i]==razmak){
//   rec.charAt(i+1).toUpperCase()
//  }
// }
// console.log(rec);

// unos=prompt("Unesite string");
// novi="";
// for(i=0;i<unos.length-1;i++){
//  if(i===0){
//   novi+= unos[0].toUpperCase();
//  }
//  if(unos[i]===" "){
//   novi+=unos[i+1].toUpperCase()
//  }
//  else{
//   novi+=unos[i+1]
//  }
// }
// console.log(novi);

unos=parseInt(prompt("Unesi minute"))
sati=Math.floor(unos/60);
minuti=unos%60;
console.log("Sati",sati)
console.log("Minuti",minuti)

