import rdp from './assets/rdp.jpg'
import { useState } from 'react'
function Assigment(){
    let [count,setCount]=useState(1)
    return(
        <div>
            <img src={rdp} height="300" width="300" ></img>
            <h4>Image view :{count} times</h4>
            <button onClick={ ()=> setCount(count+1)} >Click Here</button>

        </div>
    )
}
export default Assigment