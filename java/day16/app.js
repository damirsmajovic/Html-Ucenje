// function multiply(a,b){
//  console.log(a*b);
// }
// a=5;
// b=5;
// multiply(a,b)
// x=
// function noSpace(x){
// for(i=0;i<x.length;i++){
//   if(x[i]==" "){
//     continue
//   }
// } 
// }
str="Danas je lep dan"
function reverseWords(str){
  s=""
  b=[]
  c=0;
  i=0;
    while(str[i]!=" "){
      s+=str[i]
     i++
    }
    s+=" ";
    b[c]=s;
    c++
  console.log(b);; 
}