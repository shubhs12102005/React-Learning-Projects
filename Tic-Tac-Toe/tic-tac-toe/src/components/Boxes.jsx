import React, { useState } from "react";
import checkWinner from "../CheckWinner";

const Boxes = () => {
    const [toggle, setToggle] = useState(true); // State to track the turn (X or O)

    const handleToggle = (e) => {
        if (toggle) {
            e.target.textContent = "O"; // Set the button's content to "O"
        } else {
            e.target.textContent = "X"; // Set the button's content to "X"
        }

        setToggle(!toggle); // Toggle the turn
        e.target.disabled = true; // Disable the button after it's clicked
        checkWinner(); // Call the checkWinner function
    };

    return (
        <div className="mt-[50px] flex justify-center items-center border">
            <div className="h-[500px] w-[500px] flex justify-center items-center border border-black rounded-md">
                <div>
                    <button onClick={(e) => handleToggle(e)} className="box"></button>
                    <button onClick={(e) => handleToggle(e)} className="box"></button>
                    <button onClick={(e) => handleToggle(e)} className="box"></button>
                </div>

                <div>
                    <button onClick={(e) => handleToggle(e)} className="box"></button>
                    <button onClick={(e) => handleToggle(e)} className="box"></button>
                    <button onClick={(e) => handleToggle(e)} className="box"></button>
                </div>

                <div>
                    <button onClick={(e) => handleToggle(e)} className="box"></button>
                    <button onClick={(e) => handleToggle(e)} className="box"></button>
                    <button onClick={(e) => handleToggle(e)} className="box"></button>
                </div>
            </div>
        </div>
    );
};

export default Boxes;
