import React from "react";

function User (name, image) {
    return (
        <div>
            <img src={image} alt={image} />
            <h2>Hello, <span>{name}</span></h2>
        </div>
    )
}

export default User;