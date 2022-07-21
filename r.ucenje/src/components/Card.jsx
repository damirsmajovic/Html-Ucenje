
// const Card=()=>{
//  return(
//  <div className="card">
//   <div>Damir</div>
//   <button className="submit">Submit</button>
//   <button className="delete">Delete</button>
//  </div>
//  )
// }
// export default Card;

import React from "react";
// import Image from "Users\S\Desktop\my-project";


export default function Card(){
 return (
  <div className="card">
  <img src=/*{require(`Image`)}*/"./slika.png" alt="" className="image" />
<h1>Damir Smajovic</h1>
<h3>Frontend Devoleper</h3>
<h5>damirsmajovic.email</h5>
<div className="input">
 <div className="email"><i class="fa-solid fa-envelope"></i>Email</div>
 <div className="linked"><i class="fa-brands fa-linkedin-in"></i>Linked</div>
</div>
  </div>
 )
}