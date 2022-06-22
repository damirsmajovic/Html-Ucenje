// n="Revelation of the contents outraged American public opinion, and helped generate"
// function dropCap(n) {
// a=n.split(" ")
// s=""
//   for(i=0;i<a.length;i++){
// if(a[i].length>2){
//     s+=a[i][0].toUpperCase()+a[i].slice(1,a[i].length)+" "
// }    
// else{
//   s+=a[i]+" "
// }
    
//   }
//   console.log(s);
// }
// dropCap(n)

// n=[12,34,56,78]
// function unusedDigits(n) {
//   n=n.join("")
//   nema=""
//   for(i=0;i<10;i++){
//     ima=0;
//       for(j=0;j<n.length;j++){
//         if(n[j]==i){
//           ima++
//         }
//       }
//       if(ima==0){
//         nema+=i
//       }
//   }

//   console.log(nema);
// }
// unusedDigits(n)
// n=n.join("")
// console.log(n.length);

// function isOddHeavy(n){
//   max=n[0];
//   odd=0
//   nema=0
//   veci=0
//   el=[]
//   if(n.length==0){
//     return false
//   }
//   for(i=0;i<n.length;i++){
//     if(n[i]%2!==0 && n[i]>max){
//       max=n[i]
//     }
//   }
//   for(i=0;i<n.length;i++){
//     if(n[i]>max){
//       odd++
//     }
//     if(n[i]%2!==0){
//       nema++
//       el.push(n[i])
//     }
//   }
//   for(i=0;i<el.length;i++){
//     for(j=0;j<n.length;j++){
//       if(el[i]<n[j]){
//         veci++
//       }
//     }
//   }
//   if(veci>0){
//     return false
//   }
//   if(nema==0){
//     return false
//   }
//   if(odd>0){
//     return false
//   }
//   else{
//     return true
//   }
// }

// Multiples of 3 or 5
numbers=10
function solution(number){
  n=[]
  s=0
  if(number<0){
    return 0
  }
  for(i=1;i<=number-1;i++){
    if(i%3==0 && i%5==0){
      n.push(i)
    }
    else if(i%3==0){
      n.push(i)
    }
    else if(i%5==0){
      n.push(i)
    }
  }
  for(i=0;i<n.length;i++){
    s+=n[i]
  }
console.log(s);}
solution(numbers)