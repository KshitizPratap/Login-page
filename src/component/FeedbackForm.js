import React, { useState } from "react";
import classes from './FeedbackForm.module.css'
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config'
import Modal from './Modal'
import LandingPage from './LandingPage'
import Backdrop from './Backdrop'

function FeedbackForm(){

    const [user, setUser] = useState({});
    const [buttonState, setButtonState] = useState(false);
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [errorMessage, SetErrorMessage] = useState("");

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

    const registerHandler = async () => {
        try{
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail, 
                registerPassword
            );
            console.log(user)
        }
        catch(error){
            SetErrorMessage(error.message)
            console.log(error.message)
        }
    }

    const loginHandler = async () => {
        try{
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail, 
                loginPassword
            );
            console.log(user)
        }
        catch(error){
            // console.log(error.message)
        }
    }

    const errorDeletehandler = () => {
        SetErrorMessage("");
    }

    let Inputs = (
        <>
            <Backdrop 
                show = {errorMessage !== ""}
                errorDeletehandler = {errorDeletehandler}/>
            <p>Name:</p>
            <input type='text' placeholder = " Full Name"/>                
            <p>Phone Number:</p>
            <input type='tel' placeholder = " Phone Number"/>
            <p>Email Address:</p>
            <input 
                type='email'
                onChange = {(event) => setRegisterEmail(event.target.value)}
                placeholder = " Email"/>
            <p>Password:</p>
            <input 
                type='password'
                onChange = {(event) => setRegisterPassword(event.target.value)}
                placeholder = " Password"/>
            
            <br/>
            <button onClick = {registerHandler}>Sign-Up</button>

            <p style = {{fontSize : "12px"}}>Already have an account ? 
                <span 
                    className = {classes.Option} 
                    onClick = {() => setButtonState(!buttonState)}>
                        Login
                </span>
            </p>
        </>
        
    )

    if(buttonState){
        Inputs = (
            <>
                <Backdrop 
                    show = {errorMessage !== ""}
                    errorDeletehandler = {errorDeletehandler}/>
                <p>Email Address:</p>
                <input 
                    type='email'
                    onChange = {(event) => setLoginEmail(event.target.value)}
                    placeholder = " Email"/>
                <p>Password:</p>
                <input 
                    type='password'
                    onChange = {(event) => setLoginPassword(event.target.value)}
                    placeholder = " Password"/>
                <br/>
                <button onClick = {loginHandler}>Login</button>

                <p style = {{fontSize : "12px"}}>Don't have an account ?  
                    <span 
                        className = {classes.Option} 
                        onClick = {() => setButtonState(!buttonState)}>
                             Sign-up
                    </span>
                </p>
            </>
        )
    }

    let MainContent = null;
    
    if(user){
        MainContent = <LandingPage/> 
    }

    else{
        MainContent = (
            <div className = {classes.FeedbackForm}>
                <div className = {classes.InputContainer}>
                    {Inputs}
                </div>
            </div>
        )
    }

    return (
        <div>
            <Modal show = {errorMessage !== ""} error = {errorMessage}>
                {errorMessage}
            </Modal>
            {MainContent}
        </div>
    )
    
    
}

export default FeedbackForm;