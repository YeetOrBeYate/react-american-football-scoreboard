import React from 'react';

export function Buttons(props){
    const location = props.location ? 'home': 'away';
    const addScore = props.clickHandle;

    return(
        <div className = {`${location}Buttons`}>
            <button className = {`${location}Buttons__touchdown`} onClick = {()=>addScore(`${location}`,7)}>{location} Touch Down</button>
            <button className = {`${location}Buttons__fieldGoal`} onClick = {()=>addScore(`${location}`,3)}>{location} Field Goal</button>
        </div>
    );
}

// export default Buttons;