import React from "react";
import { auth } from '../firebase-config'
import { signOut } from 'firebase/auth';


function LandingPage(props){

    const logoutHandler = async () => {
        await signOut(auth);
    }

    return(
        <div>
            <div>
                <h1>Landing Page</h1>
                <button onClick = {() => {logoutHandler()}}>Logout</button>
            </div>
            {/* {props.user} */}
        </div>
    )
}

export default LandingPage;