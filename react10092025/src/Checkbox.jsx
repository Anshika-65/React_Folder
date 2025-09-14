import { useState } from "react"
function Checkbox() {
    let[skills,setskills]=useState([])
    function handleChange(e){
        setskills(e.target.value)
        if(e.target.value){
            setskills([...skills,e.target.value])
        }else{
            setskills([...skills,filter(skill => skill != e.target.value)])
        }

    }
    return(
        <div>
            <input type="Checkbox"id="B.tech" value="B.tech" onChange={handleChange}></input>
            <label htmlFor="B.tech">B.tech</label>
            <input type="Checkbox"id="M.tech"value="M.tech" onChange={handleChange}></input>
             <label htmlFor="M.tech">M.tech</label>
            <input type="Checkbox"id="MCA"value="MCA" onChange={handleChange}></input>
             <label htmlFor="MCA">MCA</label>
             <h3>you have Selected: {skills.toString()}</h3>
        </div>
    )
}
export default Checkbox