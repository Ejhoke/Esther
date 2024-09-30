import React, {useState} from "react";
import Timer from ".";
function Pap () {
    const [show,setShow]=useState(false);
    return (
        <div className="Pap">
<button onClick={()=>setShow(true)}>Start</button>
<button onClick={()=>setShow(false)}>Stop</button>
{show? <Timer/>:null}
        </div>
    )
}
export default Pap