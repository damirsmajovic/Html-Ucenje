a=0;
b=0;
c=0;
for(i=100;i<=999;i++){
 faktorijel=1
 a = Math.floor(i/100);
b=Math.floor((i/10)%10);
c= (i%10);
faktorijel=a*b*c;
if((i)==faktorijel){
 console.log(i);
}
}
