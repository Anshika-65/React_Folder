import { useState } from "react"
function Interest() {
    let[pr,setpr]=useState(0);
  return(
    <div>
        <table widhth="20%">
            <tr>
                <td>
                    Principal
                </td>
                <td>
                    <input type="text" onChange={(e)=>setpr(e.target.value)}></input>
                </td>
            </tr>
             <tr></tr>
             <tr>
                <td>
                    Rate
                </td>
                <td>
                    <input type="text"></input>
                </td>
            </tr>
             <tr>
                <td>
                    Time
                </td>
                <td>
                    <input type="text"></input>
                </td>
            </tr>
            <br></br>
            <button >Add</button>
        </table>

    </div>
  )
}
export default Interest