const WinPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const checkWinner = () => {
    const boxes = document.querySelectorAll(".box"); // Select all buttons

    console.log("Checking for a winner...");

    for (let pattern of WinPattern) {
        const [a, b, c] = pattern;
        let Pos1val = boxes[a].textContent; // Get text content of the first position
        let Pos2val = boxes[b].textContent; // Get text content of the second position
        let Pos3val = boxes[c].textContent; // Get text content of the third position

        if (Pos1val !== "" && Pos2val !== "" && Pos3val !== "") {
            if (Pos1val === Pos2val && Pos2val === Pos3val) {
                alert(`Winner is: ${Pos1val}`); // Show winner with an alert
                disableAllButtons(boxes); // Disable all buttons after the winner is found
                break;
            }
        }
    }
};

// Function to disable all buttons once there's a winner
const disableAllButtons = (boxes) => {
    boxes.forEach((box) => {
        box.disabled = true; // Disable each button
    });
};

export default checkWinner;
