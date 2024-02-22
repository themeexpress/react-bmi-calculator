import React from "react";
import { useMemo, useState } from "react";
import "./style.css";

//set the default weight and height

const DEFAULT_WEIGHT = 30;
const DEFAULT_HEIGHT = 120;

function App() {
  //set the weight and height 

  const [height, setHeight] = useState(DEFAULT_HEIGHT)
  const [weight, setWeight] = useState(DEFAULT_WEIGHT)

  //create the functions for onchange height and weight

  const onHeightChange = (event) => {
    const inputHeight = event.target.value;
    setHeight(inputHeight);
  }

  const onWeightChange = (event) => {
    const inputWeight = event.target.value;
    setWeight(inputWeight);
  }

  //Now let"s calculate the BMI
  const output = useMemo(() => {
    const calculateHeight = height / 100;
    return (weight / (calculateHeight * calculateHeight)).toFixed(1)
  }, [weight, height]) //I did mistake here. I forgot to define array here :(


  //Now write a function for bmi status
  function bmi_status(output){
    let bmi_status_text = ""
    let bmi_status_class = ""
    //The measurement is got from standard BMI info
    if(output < 18.5){
      bmi_status_text = "Under weight"
      bmi_status_class = "blue"
    }
    else if(output > 18.5 && output <= 24.9){
      bmi_status_text = "Normal Weight"
      bmi_status_class = "green"
    }
    else if(output > 25 && output <= 29.9){
      bmi_status_text = "Over Weight"
      bmi_status_class = "Yellow"
    }
    else if(output > 30 && output <= 34.9){
      bmi_status_text = "Obesity Class I"
      bmi_status_class = "red"
    }
    else if(output > 35 && output <= 39.9){
      bmi_status_text = "Obesity Class II"
      bmi_status_class = "red"
    }
    else{
      bmi_status_text = "Obesity Class III"
      bmi_status_class = "red"
    }
    return [bmi_status_text, bmi_status_class]
  }


  return (
    <main>
      <h1>React BMI Calculator</h1>
      <div className="input-section">
        <p className="slider-output">Weight : {weight} kg </p>
        <input 
          className="input-slider"
          onChange={onWeightChange}
          type="range"
          step="1"
          min="40"
          max="220"
        />
        <p className="slider-output">Height : {height} cm </p>
        <input 
          className="input-slider"
          onChange={onHeightChange}
          type="range"
          step="1"
          min="120"
          max="220"
        />
      </div>
      <div className="output-section">
        <p>Your BMI </p>
        <p className="output"> {output} </p>
        <p className="status"><span className={bmi_status(output)[1]}>◯</span>{bmi_status(output)[0]}</p>
      </div>
    </main>
  );
}

export default App;

// Now lets push the project on github first
// next deploy it in vercel(free hosting for limited projects)
// Happy coding
