import React, { useState } from "react";
import classes from './FeedbackForm.module.css'
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config'
import Modal from './Modal'
import LandingPage from './LandingPage'

function FeedbackForm(){

    const [user, setUser] = useState({});
    const [buttonState, setButtonState] = useState(false);
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

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
            <Modal>
                {error.message}
            </Modal>
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
            <Modal>
                {error.message}
            </Modal>
        }
    }

    let Inputs = (
        <>
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
    
    if(!user){
        MainContent = (
            <div className = {classes.FeedbackForm}>
                <div className = {classes.InputContainer}>
                    {Inputs}
                </div>
            </div>
        )
    }

    if(user){
        MainContent = <LandingPage/>
    }

    return MainContent
}

export default FeedbackForm;