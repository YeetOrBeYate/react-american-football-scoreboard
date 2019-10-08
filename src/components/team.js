import React from "react";

 function Team(props){
    const teamName = props.name;
    const TeamLocal = props.isHome ? 'home' : 'away';

    let score = props.score;

    return(
        <div className = {TeamLocal}>
            <h2 className = {`${TeamLocal}__name`}>{teamName}</h2>
            <div className = {`${TeamLocal}__score`}>{score}</div>
        </div>
    )
}
 export default Team;