// a="Danas je mnogo lep dan"
// function findShort(s){
//   s=s.split(" ")
//   min=s[0];
//   for(i=0;i<s.length;i++){
//     if(s[i].length<min.length){
//       min=s[i]
//     }
//   }console.log(min.length);
// }
// findShort(a)
a=["a",5,2,"nesto",3,1]
function filter_list(l) {
  s=[]
  for(i=0;i<l.length;i++){
    if(typeof l[i] !== 'string' ){
      s.push(l[i])
    }
  }console.log(s);  
}
filter_list(a)