// function howMuchWater(water, load, clothes){
//   procent=water*0.1
//   if(clothes<load*2 && clothes>load){
//     if(clothes>load){
//       procent= water*(1.1**(clothes-load))
//       console.log(procent.toFixed(2)); 
//     }
//   }
//   else if(clothes>load*2){
//     console.log("Too much clothes");
//   }
//   else if(clothes<load){
//     console.log("Not enough clothes");
//   }
// }
// howMuchWater(50,15,29)

var humanYearsCatYearsDogYears = function(humanYears) {
  dog=0;
  cat=0
  for(i=0;i<humanYears;i++){
    if(i==0){
      cat+=15
      dog+=15
    }
    else if(i==1){
      cat+=9
      dog+=9
    }
    else{
      cat+=4
      dog+=5
    }
  }
  console.log(humanYears,cat,dog);;
}
humanYearsCatYearsDogYears(1)

