import React, { useState } from 'react';
import './App.css';
import './skeleton.css';

export default function Form() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result1RM, setResult1RM] = useState(0);
  const [result5RM, setResult5RM] = useState(0);
  const [result10RM, setResult10RM] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  function multiplyInputs1RM() {
    setResult1RM((input1 * 0.64) * ((input2 / 30) + 1));
  }

  function multiplyInputs5RM() {
    setResult5RM((input1 * 0.64) * ((input2 / 30) + 1) * 0.875);
  }

  function multiplyInputs10RM() {
    setResult10RM((input1 * 0.64) * ((input2 / 30) + 1) * 0.75);
  }

  function showElement() {
    setIsVisible(true);
  }

  return (
    <div class = "container">

      <div class = "titles">
      <h3 class ="title">Push-Up To Bench Press Calculator</h3>
      <h3 class ="subtitle"> <a href="https://uk.linkedin.com/in/guy-mulligan-6868a7107">by Guy Mulligan</a></h3>
      </div>

      <div class ="inputNumbers">
      <p>My bodyweight is <input type="number" id="bodyweight" value={input1} onChange={(e) => setInput1(e.target.value)} /> kg</p>
      <p>I can do <input type="number" id="NumberOfPushUps" value={input2} onChange={(e) => setInput2(e.target.value)} /> push-ups</p>
      </div>

      <button onClick={() => { multiplyInputs1RM(); multiplyInputs5RM(); multiplyInputs10RM(); showElement(); }}>Calculate</button>
      {isVisible && (
        <div class = "calculations">
          <p class ="oneRM">You could be able to bench press {Math.round(result1RM)}kg for 1 rep</p>
          <p class ="fiveRM">You could be able to bench press {Math.round(result5RM)}kg for 5 reps</p>
          <p class ="tenRM">You could be able to bench press {Math.round(result10RM)}kg for 10 reps</p>
        </div>
      )}

      <div className="Disclaimer">
      <p>Push-Up to Bench Press Calculator uses the <a href="https://www.vcalc.com/wiki/vCalc/Epley-Formula-1-rep-max">Epley Formula </a>
          to estimate out your flat bench press 1-rep max, and assumes that a push-up requires pushing 64% of your bodyweight, as was calculated in <a href="https://pubmed.ncbi.nlm.nih.gov/21873902/">this </a>study. This website does not contain any fitness advice and is for entertainment purposes only.</p>
       </div>

      </div>
  );
}

//NEX TIME
// Use skeleton, check out its layout system
// GRID?
// Gentler animation for 1RM,5RM and 10RM to pop up after calculate button presson
// Make icon softer (round? rounded edges?)


// 

// Add this in later when choosing kg or lbs
/*<input type="radio" inputmode="numeric" name="weightUnit" value="lbs" checked /> 
      <label htmlFor="lbs">lbs</label>
      <input type="radio" inputmode="numeric" name="weightUnit" value="kg" /> 
      <label htmlFor="kg">kg</label>*/

//Maths
// PU = 0.56*BP