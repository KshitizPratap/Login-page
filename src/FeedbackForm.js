import React, { useState } from "react";
import classes from './FeedbackForm.module.css'

function FeedbackForm(){

    const [buttonState, setButtonState] = useState(false);

    let Button = (
        <button>Sign-in</button>
    )

    if(buttonState){
        <button>Login</button>
    }
    return(
        <div className = {classes.FeedbackForm}>

            <div className = {classes.InputContainer}>
                <p>Email Address:</p>
                <input type='email'/>
                <p>Password:</p>
                <input type='password'/>
                <p>Name:</p>
                <input type='text'/>                
                <p>Phone Number:</p>
                <input type='tel'/>
            </div>

            {Button}
        </div>
    )
}

export default FeedbackForm;