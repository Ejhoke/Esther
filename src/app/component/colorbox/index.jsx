import React, {useState} from "react";
function ColorBox() {
    const [color, setColor] = useState("orange");
    const styles = { 
    background: color,
};
return (
    <div>
        <h1>Color Box</h1>
        <input type = "text" style= {styles} placeholder = "Type a color"/>
    </div>
);
}
export default ColorBox;

