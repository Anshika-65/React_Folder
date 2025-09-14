import {useState} from "react";
function First() {
    let[name , setName] = useState("Anshika");
    
  return(
    <div>
        <h1> We will make a project soon</h1>
        <h1>hello: {name}</h1>
         <button onClick={()=> setName("tanu")}>Click here</button>
         <h1>hi : {name} </h1>
    </div>
  )
}
export default First