//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import Team from "../src/components/team.js";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [tiger, setTiger] = useState(0);
  const [lion, setLion] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <Team name = "Yeets" isHome = {true} score = {lion}/>
          <div className="timer">00:03</div>
          <Team name = "Yates" isHome = {false} score = {tiger}/> 
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick = {()=> setLion(lion +7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {()=> setLion(lion + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick = {()=> setTiger(tiger +7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {()=> setTiger(tiger +3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
        <div>
          <button onClick = {()=>{
            setTiger(0);
            setLion(0);
          }}>Reset</button>
        </div>
      </section>
    </div>
  );
}

export default App;
