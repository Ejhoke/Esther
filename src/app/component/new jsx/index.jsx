import React from "react"
import image from "../../asset/ejhoke.jpg"
import style from "./style.module.css"
export const Newjsx= () => {
    return (
        <div>
<h1>Ehjoke</h1>
<img className={style.image} src={image} alt="ejhoke.jpg" />
<h2>Hobbies</h2>
<ul>
    <li>Dancing</li>
    <li>Football</li>
    <li>Cooking</li>
</ul>
        </div>
    )
}