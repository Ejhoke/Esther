import React from "react";
import Welcome from "./welcome";


function Man() {
    
    const names = ["Esther","Vanny","Amaka","Ejhoke",];
    return ( 
        <div className="Man">
        {names.map((nm) => ( 
            <Welcome name = {nm} />
        ))}

        </div>
    );
}

export default Man