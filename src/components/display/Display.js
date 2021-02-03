import React, { Component } from "react";





const Display = (props) =>
{
    return(
        <div >
            <h1>{props.category} </h1>
            <h1>{props.question}</h1>
            <h1>{props.updateScore}</h1>
            <form 
                onSubmit={props.form}/>
                 <input type="text" value={props.otherValue} onChange={props.change}/>
            <h2>{props.value}</h2>
        </div>
    )
}
export default Display