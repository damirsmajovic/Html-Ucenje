/*
for(i=1;i<=10;i++){
 console.log(i);
}
console.log("Ispod")
for(i=1;i<=10;i++){
 if(i%2==0){
  console.log(i);
 }
}
console.log("Ispod")*/
/*
a=parseInt(prompt("Unesi pocetnu vrednos"))
n=parseInt(prompt("Unesi krajnu vrednos"))
for(i=a;i<=n;i++){
 console.log(i);
}
console.log("parni ispod")
for(i=a;i<=n;i++){
 if(i%2===0)
 console.log(i);
}*/
/*
for(i=0;i<=15;i++){
 if(i%2===0){
 console.log(`Broje je ${i} Paran`)}
 else{
  console.log(`Broje je ${i} Neparan`)
 }
}*/
/*
a=parseInt(prompt("Unesi pocetnu vrednos"))
n=parseInt(prompt("Unesi krajnu vrednos"))
for(i=a;i<=n;i++){
 if(i%3===0 && i%5===0){
  console.log("FIzzBUzz")
 }
 else if(i%3===0){
  console.log("Fizz")
 }
 else if(i%5===0){
  console.log("Buzz")
 }
 else{
  console.log(i)
 }
}*/
s=0;
s1=0;
s2=0;
aritmeticka=0;
a=parseInt(prompt("Koliko brojeva zelite da unesete"))
for(i=0;i<a;i++){
 b=parseInt(prompt(`Vas ${i+1} broj je`))
 s+=b;
 if(b%2===0){
  s1+=b
 }
 else{
  s2+=b
 }
}
console.log(`Zbir svih brojeva je ${s}`);
aritmeticka=s/a;
console.log(`Aritmeticka sredina je ${aritmeticka}`)
console.log(`Zbir svih parnih brojeva je ${s1}`);
console.log(`Zbir svih neparnih brojeva je ${s2}`);
