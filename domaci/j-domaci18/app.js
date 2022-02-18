auto=prompt("Izaberite auto koji zelite da izbacite")
function car(auto){
 var golf ={
  ime: "WW Golf",
  godina: "2009",
  boja: "Bela",
  Jacina: "150KW",
 }
 var bmw ={
  ime: "BMW",
  godina: "2005",
  boja: "Crna",
  Jacina: "200KW",
 }
 if(auto=="Golf"){
  console.log(bmw);
 }
 else if(auto=="Bmw"){
  console.log(golf);
 }
 else{
  console.log("Undefiened");
 }
}
car(auto)