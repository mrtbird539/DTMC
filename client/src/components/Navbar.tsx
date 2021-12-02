import React from "react";
import LoginButton from "./login";
import LogoutButton from "./logout";
import { useAuth0 } from "@auth0/auth0-react";

export const Navbar = (props: any) => {
    const { isAuthenticated } = useAuth0();
    if (isAuthenticated) {

        return (
            <nav className="navbar is-black" role="navigation" aria-label="main navigation">
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start"></div>
                </div>
                {/* <!-- Items in navbar --> */}
                <div className="navbar-end">
                    <LogoutButton />
                    <a className="navbar-item" href="/">Home</a>
                    <a className="navbar-item" href="/myGarage">Garage</a>
                </div>
            </nav>
        )
    } else {
        return (
            <nav className="navbar is-black" role="navigation" aria-label="main navigation">
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start"></div>
                </div>
                {/* <!-- Items in navbar --> */}
                <div className="navbar-end">
                    <LoginButton />
                    <a className="navbar-item" href="/">Home</a>
                    <a className="navbar-item" href="/myGarage">Garage</a>
                </div>
            </nav>

        )
    }
}