import React from "react";
import LoginButton from "./login";
import LogoutButton from "./logout";

export const Navbar = (props: any) => {

    return (
        <nav className="navbar is-black" role="navigation" aria-label="main navigation">
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start"></div>
            </div>
            {/* <!-- Items in navbar --> */}
            <div className="navbar-end">
                <LoginButton />
                <LogoutButton />
                <a className="navbar-item" href="/">Home</a>
                <a className="navbar-item" href="/myGarage">Garage</a>
                <a className="navbar-item" href="#Dummy">Dummy</a>
            </div>
        </nav>
    );
}