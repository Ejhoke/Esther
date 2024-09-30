import React, { useState, useEffect } from "react";
import { FcLike } from "react-icons/fc";
import { SlDislike } from "react-icons/sl";
import  image from "../../asset/flower.jpg"
import style from "./style.module.css"
function Effect () {
    let [like,setLike] = useState (0);
    let[dislike,setDislike]=useState(0)
    useEffect(() => {
console.log("like is updated",like);
    });
    return (
        <div>
            <img src={image} alt="flower" className={style.imagemage}/>
            <button onClick={()=>setLike(like+1)}>{<FcLike />} {like}</button>
            <button onClick={()=>setLike(like+1)}>{<SlDislike />} {dislike}</button>
        </div>
    );
}
export default Effect;