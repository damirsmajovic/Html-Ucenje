// import "./App.css"
// import Card from "./components/Card";

// const App = () =>{
 //  return(
  // <div className="container">
//  <h1>Damirova lista</h1>
//  <div className="form" onChange={()=>{
//   console.log("Changed")
//  }}>
//   <input type="text" />
//   <button onClick={()=>{
//    console.log("Clicked");
//   }}>ADD</button>
//  </div>
//  <Card/>
// </div>
//  )
// }

// export default App;

  import React from "react";
  import "./App.css";
  import Card from "./components/card";
  import Main from "./components/main";
  import Footer from "./components/footer";


export default function App(){
 return(<div className="App">
  <Card/>
  <Main/>
  <Footer/>
 </div>
 )
}
