b=0;
n=prompt("Unesite broj ucenika")
 b=parseInt(prompt("Unesite visinu ucenika"))
 min=b;
 max=b;
for(i=0;i<n-1;i++){
 b=parseInt(prompt("Unesite visinu ucenika"))
 if(b<min){
  min=b;
 }
 else if(b>max){
  max=b;
 }
}
console.log(`Najnizi ${min} cm`)
console.log(`Najvisi ${max} cm`)
