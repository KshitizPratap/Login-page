import React from "react";
import classes from './Backdrop.module.css'

const backdrop = (props) => {

    let Backdrop = (
        <div 
            className = {classes.Backdrop}
            onClick = {props.errorDeletehandler}>
        </div>
    )

    if(props.show === false){
        Backdrop = null;
    }

    return Backdrop;
    
}

export default backdrop;