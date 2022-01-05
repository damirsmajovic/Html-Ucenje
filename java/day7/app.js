
// for(i=0;i<=10;i++){
//  for(j=0;j<=10;j++){
//   console.log(i+"*"+j+"="+i*j);
//  }
// }


// s="";
// for(i=1;i<7;i++){
//   s+="*";
//   console.log(s);
// }

// a=prompt("Unesite broj")
// c=a.length;
// for(i=a.length-1;i>=0;i--){
// c+=a[i];
// }
// if(a===c){
//  console.log("Rec je polindrom")
// }
// else{
//  console.log("Rec nije polindrom")
// }
n=parseInt(prompt("Unesite broj"));
s="";
for(i=1;i<=n;i++){
  for(j=1;j<=i;j++){
   s+=i;
  }
  console.log(s);
  s="";
}