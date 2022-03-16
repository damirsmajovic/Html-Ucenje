// const el=document.getElementById("heading")
// console.log(el);

// const el=document.getElementsByClassName("main")
// console.log(el);

// const el=document.getElementsByName("")
// console.log(el);

// const el=document.getElementsByTagName("div")
// console.log(el);

// const el=document.querySelector("div")
// console.log(el);

// const el=document.querySelectorAll("div")
// console.log(el);

// const el=document.querySelectorAll("div>h1")
// console.log(el);

// const el=document.querySelectorAll(".main h1")
// console.log(el);

// const el=document.querySelector("h1")
// el.innerText="Damir"
// console.log(el);

// const el=document.querySelector("h1")
// el.style.backgroundColor= "red"
// el.style.color="blue"
// console.log(el);

// const el1=document.getElementById("heading")
// const el2=document.getElementById("heading2")
// el1.innerText="Damir"
// el1.style.color="white"
// el1.style.backgroundColor="black"
// el1.style.fontSize="20px"
// el2.innerText="Vahid"
// el2.style.color="green"
// el2.style.backgroundColor="orange"
// el2.style.fontSize="40px"

// const main=document.getElementById("main")
// const noviel=document.createElement("h1")
// noviel.innerText="Novi El"
// main.appendChild(noviel)

async function GetData() {
  novi = [];
  main = document.getElementById("main");
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const responseJson = await response.json();
    console.log(responseJson);
    for (i = 0; i < responseJson.length; i++) {
      novi.push(responseJson[i].name);
    }
    for (i = 0; i < novi.length; i++) {
      const noviel = document.createElement("p");
      noviel.innerText = novi[i];
      main.appendChild(noviel);
    }
    console.log(novi);
  } catch (err) {
    console.log(err);
  }
}
GetData();