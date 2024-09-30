import React from "react";
import Wednesday from "./wednesday";
import ClickMe from "../../button";
function Arise () {
    
    return (
        <div>
          {Wednesday.map((wednesday, index)=> (
            <div key={index}>
                <img src={wednesday.Image} alt={wednesday.Image} />
                <h2>hello, <span>{wednesday.name}</span></h2>
            </div>
          ))} 
          <ClickMe />
        </div>
    )
}

export default Arise

