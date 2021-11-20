import React from "react";

export const Navbar = (props:any) => {

    return (
        <nav className="navbar is-black" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start"></div>
        </div>
        {/* <!-- Items in navbar --> */}
        <div className="navbar-end">
            <a className="navbar-item" href="#Dummy">Dummy</a>
            <a className="navbar-item" href="#Dummy">Dummy</a>
            <a className="navbar-item" href="#Dummy">Dummy</a>
        </div>
    </nav>
    );
}