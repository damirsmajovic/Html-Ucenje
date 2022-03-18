
// const el=document.getElementById("dugme")
// el.addEventListener("mouseover",()=>{
//  console.log("You clicked");
// })

// const el=document.getElementById("dugme")
// el.addEventListener("click",()=>{
//  console.log("You clicked");
// })

// const el=document.getElementById("dugme")
// el.addEventListener("click",(event)=>{
//  console.log("You clicked");
//  console.log(event);
// })

// const inp=document.getElementById("name")
// inp.addEventListener("change",inputchanger)
// console.log(inp);
// function inputchanger(){
//  console.log("U changed");
//  console.log(inp.value);
// }

const send = {
  firstName: "",
  lastName: "",
  email:"" ,
  pass: ""
};
const form=document.getElementById("form")
const inp1=document.getElementById("name")
const inp2=document.getElementById("surname")
const inp3=document.getElementById("mail")
const inp4=document.getElementById("pass")
const button=document.getElementById("submit")
form.addEventListener("submit",(el)=>{
 el.preventDefault();
 send.firstName=inp1.value
 send.lastName=inp2.value
 send.email=inp3.value
 send.pass=inp4.value

 fetch("http://serene-fortress-45917.horokuapp.com/v1/auth/signup")
 method:"Post"
 
})