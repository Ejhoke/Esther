import React from "react";
function StartGame ({onPlayerClick}) {
    return(
        <div>
             <button onClick={() => onPlayerClick()}>Start</button>
        </div>
    );
}
export default StartGame