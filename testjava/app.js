 fetch("https://catfact.ninja/facts")



 async function zadatak(){
  novi=[]
  nesto=[]
  main = document.getElementById("main");
  try {
    const response = await fetch("https://catfact.ninja/facts");
    const responseJson = await response.json();
    // console.log(responseJson.data.length);
    for (i = 0; i < responseJson.data.length; i++) {
     novi.push(responseJson.data[i].fact)
    }
    
    for (i = 0; i < novi.length; i++) {
      const noviel = document.createElement("p");
      noviel.innerText =novi[i];
      main.appendChild(noviel);
    }
    
    // console.log(novi);
  } catch (err) {
    console.log(err);
  }

 }
 zadatak()