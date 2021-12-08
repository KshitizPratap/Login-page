import React from "react";
import classes from './Modal.module.css'


const Modal = (props) => {
    let Description = "";

    if(props.error === "Firebase: Error (auth/internal-error)."){
        Description = "Invalid password"
    }
    else if(props.error === "Firebase: Error (auth/email-already-in-use)."){
        Description = "Account already exists."
    }
    else if(props.error === "Firebase: Error (auth/invalid-email)."){
        Description = "Invalid Email ID."
    }

    return (
        <>
            <div className = {classes.ModalContainer}
            style = {{ transform : props.show ? 'translateY(0)' : 'translateY(-75vh)'}}>
            <h1>Error</h1>
            {props.error}
            <p><strong>{Description}</strong></p>
        </div>
        </>
    )
}

export default Modal