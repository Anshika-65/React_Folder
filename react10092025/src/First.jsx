import { useState } from "react"
function First(){
  let [fno, setFno]=useState(0);
  let [Sno, setSno]=useState(0);
  let [result,setResult]=useState(0);

    function AddNumbers(){
        // alert(fno)
        // alert(Sno)
        setResult(parseInt(fno) + parseInt(Sno))
    }
    return (
        <div>
            First No <input type="text" onChange={(e)=>setFno(e.target.value)}></input><br></br><br></br>
            <h4>you are Entering {fno}</h4>
            Second No <input type="text" onChange={(e)=>setSno(e.target.value)}></input><br></br><br></br>
            <h3>Heyy {Sno}</h3>
            Result <input type="text" value={result}></input><br></br><br></br>
            <button onClick={AddNumbers}>ADD</button>
        </div>
    )

    
}
export default First