arr=[];
n=parseInt(prompt("Unesite broj elemenata"));
for(i=0;i<n;i++){
 arr[i]=prompt(`${i+1}: elemenat`)
}
console.log(arr)
dali=parseInt(prompt("Da li je ovo u redu(0), Da li zelite da ubacite novi element (1), Da li zelite da izbacite element iz niza (2)"));
while(dali!=0){

if(dali==1){
 pozicija=parseInt(prompt("Na kojoj poziciji zelite da ubacite element"))
 element=prompt("Unesite element")
 arr.splice(pozicija,0,element)
 console.log(arr)
}
else if(dali==2){
 pozicija=parseInt(prompt("Na kojoj poziciji zelite da izbacite element"))
 element=parseInt(prompt("Unesite broj elemenata"))
  arr.splice(pozicija,element)
  console.log(arr)
  
}
dali=parseInt(prompt("Da li je ovo u redu(0), Da li zelite da ubacite novi element (1), Da li zelite da izbacite element iz niza (2)"));}
 console.log("Drago nam je da ste zadovoljni")

