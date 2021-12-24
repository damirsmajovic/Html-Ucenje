a=prompt("Unesite niz");
b=a.length/2;
b=Math.round(b);
d=a.slice(0,b);
c=a.slice(b,a.length);
if(d==c){
 console.log("Polovine su jednake")
}
else{
 console.log("Nisu jednake")
}
