import React from 'react';
import setSomething from "../../src/App.js";

function Buttons(props){
    const location = props.location ? 'home': 'away';

    return(
        <div className = {`${location}Buttons`}>
            <button className = {`${location}Buttons_touchdown`} onClick = {()=>setSomething(`${location}`,7)}>yeet</button>
            <button className = {`${location}Buttons_fieldGoal`} onClick = {()=>setSomething(`${location}`,3)}>yate</button>
        </div>
    );
}

export default Buttons;