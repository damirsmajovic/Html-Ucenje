import "./App.css"
import Card from "./components/Card";

const App = () =>{
 return(
<div className="container">
 <h1>Damirova lista</h1>
 <div className="form" onChange={()=>{
  console.log("Changed")
 }}>
  <input type="text" />
  <button onClick={()=>{
   console.log("Clicked");
  }}>ADD</button>
 </div>
 <Card/>
</div>
 )
}

export default App;