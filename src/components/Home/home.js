import React, {useState} from "react";
import SignUp from '../SignUp/index';
import Login from '../Login/index';


function Home() {
    const [currentHomeAction, setHomeAction] = useState("Default")
    const returnHomeAction = () => {
        if (currentHomeAction === "Default") {
            return (

                <div className="my-home">
                <div className = "button-group">
                    <button className="home-button" 
                        id="login-button"
                        onClick = {() => homeActionChange("Login")}
                        >
                        Login
                    </button>
                    <button className="home-button" 
                        id="signup-button"
                        onClick = {() => homeActionChange("SignUp")}
                        >
                        Sign Up
                    </button>
                    <button className="home-button" 
                        id="guest-button"
                        onClick = {() => homeActionChange("Home")}
                        >
                        Guest
                    </button>
                </div>
            </div>
            )
       }
        else if (currentHomeAction === "Login") {
            return <Login />
        }
        else if (currentHomeAction === "SignUp") {
            return <SignUp />
        }
    }
    const homeActionChange = (currentAction) => setHomeAction(currentAction);

        return (
            <div>
                {returnHomeAction()}
            </div>
        )
    }

export default Home;
