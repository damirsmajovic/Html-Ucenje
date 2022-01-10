// faktorijel1=0;
// faktorijel2=1;
// a=prompt("unesite broj");
// for(i=1;i<=a;i++){
//  for(j=1;j<=i;j++){
//   faktorijel2*=j;
//  }
//   faktorijel1+=faktorijel2;
// }
// console.log(faktorijel1)
// for(i=1;i<=10;i++){
//  b="";
//  for(j=1;j<=10;j++){
//   a=(i*j);
//   b+=" "+a;
//  }
//  console.log(b);
// }
// isti zadatak samo prof verzija
// for(let i = 1;i<=10;i++){
//  red="";
//  for(let j = 1;j<=10;j++){
//   red+=`${j*i} \t`;
//  }
//  console.log(red);
// }

b=[10]
brg=0;
 g=0
 brd=0;
 d=0
 brn=0
for(i=0;i<10;i++){
 b[i]=prompt("Unesite broj temperature");
}
for(i=0;i<10;i++){
 a=parseInt(b[i])
 if(a>0){
  brg+=a;
  g++
 }
 else if(a<0){
  brd-=a;
  d++
 }
}
console.log(`Prosecna gornja temperature je ${brg/g}`)
console.log(`Prosecna donja temperature je -${brd/d}`)