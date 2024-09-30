import React,{useState} from "react";
import { AiFillLike } from "react-icons/ai";
function Counter () {
    // let like =10;
    // return (
    //     <div>
    //         {/*camelcase*/}
    //         <button
    //         onClick={() => { 
    //         like++;
    //         console.log (like);
    // }}
    //   >
    //     Like
    //     </button>
    //     <h1>{like}</h1>
    //     <h1>{like}</h1>
    //     <h1>{like}</h1>
    //     </div>
    // )

   let [like, setLike] = useState(0);
   return  ( 
    <div>
        <button onClick = {() => setLike(like+1)}><AiFillLike /></button>

        <h1>{like}</h1>
    </div>
   )
}
export default Counter