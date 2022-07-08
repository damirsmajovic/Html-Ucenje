import "./App.css"
import Card from "./components/Card";

const App = () =>{
 return(
<div className="container">
 <h1>Damirova lista</h1>
 <div className="form">
  <input type="text" />
  <button>ADD</button>
 </div>
 <Card/>
</div>
 )
}

export default App;