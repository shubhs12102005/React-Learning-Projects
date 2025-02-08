import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const calcBmi = (e) => {
    e.preventDefault();

    // Convert weight and height to numbers
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    // Debugging Logs
    console.log("Weight:", weightNum);
    console.log("Height:", heightNum);

    // Validate inputs
    if (!weightNum || !heightNum || weightNum <= 0 || heightNum <= 0) {
      alert("Please enter valid positive numbers for weight and height.");
      return;
    }

    // Calculate BMI
    const bmiValue = (weightNum / (heightNum * heightNum)) * 703;
    console.log("BMI:", bmiValue); // Debugging Log
    setBmi(bmiValue.toFixed(2)); // Round to 2 decimal places

    // Determine BMI category
    if (bmiValue < 18.5) {
      setMessage("You're Underweight.");
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setMessage("You have a Healthy Weight.");
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setMessage("You're Overweight.");
    } else {
      setMessage("You're Obese.");
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h2 id="heading">BMI Calculator</h2>

        <div className="inputclass">
          <label className="label" htmlFor="weight">Weight (lbs): </label>
          <input className="input"
            type="text"
            onChange={(e) => setWeight(e.target.value)}
            id="weight"
            value={weight}
          />
        </div>

        <div className="inputclass">
          <label className="label" htmlFor="height">Height (in): </label>
          <input className="input"
            type="text"
            onChange={(e) => setHeight(e.target.value)}
            id="height"
            value={height}
          />
        </div>

        <button id="btn" onClick={calcBmi}>Submit</button>

        <div className="msg">
          {bmi && (
            <>
              <h1 id="bmiheading">Your BMI is: {bmi}</h1>
              <p id="para">{message}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
