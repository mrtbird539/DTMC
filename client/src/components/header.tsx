import React from "react";
import Profile from "./userProfile";


export const Header = () => {

    return (
        <section className="section">
            <div className="columns">
                <div className="column is-four-fifths is--justify-content-center">
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