//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import Team from "../src/components/team.js";
import {Buttons} from "../src/components/buttons.js";
import BottomRow from "./BottomRow";




function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.


  const [home, setHome] = useState(0);
  const [away, setAway] = useState(0);
  
  function setSomething(team,score){
    if(team === "home"){
      setHome(home + score)
    }else{
      setAway(away + score)
    }
  }
 
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <Team name = "Yeets" isHome = {true} score = {home}/>
          <div className="timer">00:03</div>
          <Team name = "Yates" isHome = {false} score = {away}/> 
        </div>
        <BottomRow/>
      </section>
      <section className="buttons">
        <Buttons location = {true} clickHandle = {setSomething}/>
        {/* <div className="homeButtons">
          <button onClick = {()=> setSomething("home",7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {()=> setSomething("home",3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div> */}
        <Buttons location = {false} clickHandle = {setSomething}/>
        {/* <div className="awayButtons">
          <button onClick = {()=> setSomething("away",7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {()=> setSomething("away",3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div> */}
        <div>
          <button onClick = {()=>{
            setHome(0);
            setAway(0);
          }}>Reset</button>
        </div>
      </section>
    </div>
  );
}

export default App;

