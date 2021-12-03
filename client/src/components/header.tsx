import React from "react";
import Profile from "./userProfile";


export const Header = () => {

    return (
        <section className="section">
            <div className="columns">
                <div className="column is-6 is-offset-3">
                    <h1 className="title">Dude, There's My Car!</h1>
                    <h2 className="subtitle">Share your sweet ride(s)!</h2>
                </div>
                <div className="column">
                    <Profile />
                </div>
            </div>
        </section>
    );
};