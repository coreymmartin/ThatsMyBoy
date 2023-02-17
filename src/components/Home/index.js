import React from "react";
import App from "../../App";

function Home({ CategoryChange }) {
    return (

        <section className="my-5">
            <div className="container">
                <div className="welcome-page-name"> Jaxson
                    <div className="row"></div>

                    <button
                        className="button"
                        id="user-login"
                        type="button"
                        onClick={() => App.CategoryChange("SignUp")}>
                        Login
                    </button>

                    <button className="button" id="sign-up" type="button">Sign Up</button>
                    <button className="button" id="continue-as-guest" type="button">Continue as Guest</button>
                </div>
            </div>
        </section>


    );
}


export default Home;


