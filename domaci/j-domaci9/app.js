// arr=["Red","Green","White","Black"]
// s="";
// for(i=0;i<arr.length;i++){
//  s+=arr[i]+",";
// }
// console.log(s);

rec=prompt("Unesite recenicu");
vrec="";
mrec="";
for(i=0;i<rec.length;i++){
vrec+=rec[i].toUpperCase();
}
for(i=0;i<vrec.length-1;i++){
 if(i===0){
  mrec+=vrec[i].toLowerCase()
 }
 if(vrec[i]===" "){
  mrec+=vrec[i+1].toLowerCase()
 }
 else{
  mrec+=vrec[i+1]
 }
}
console.log(mrec)