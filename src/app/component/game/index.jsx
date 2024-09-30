import React, { useState } from "react";
import StartGame from "./start";
function Game() {
    let [count, setCount] = useState(0);
    const startGame = () => {
        console.log("Game is started");
        setCount(count + 1);
    };
    return (
        <div>
            <h1>Game started {count} time</h1>
            <StartGame onPlayerClick={startGame} />
        </div>
    );
}
export default Game