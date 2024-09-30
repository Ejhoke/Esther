import React, {useState} from "react";
function ColorBox2() {
    const [color,setColor] = useState("");
    const styles = {
        background: color,
    };
    return (
        <div>
            <h1>Color Box</h1>
            <input
            type="text"
            style={styles}
            placeholders="Type a color"
            onChange={(event)=>setColor(event.target.value)}
            />
        </div>
    )
};
export default ColorBox2