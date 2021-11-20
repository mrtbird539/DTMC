import React from "react";

export const CarCard = (props: any) => {

    return (
        <div className="column is-4 is-offset-1">
            <div className="card is-fullwidth">
                <header className="card-header">
                    <p className="card-header-title">
                        {props.title}
                    </p>
                </header>
                <div className="card-image">
                    <figure className="image">
                        {/* <!-- Image is a link to the live site --> */}
                        <a href="http://placecorgi.com/250" target="_blank" rel="noopener noreferrer">
                            <img src="http://placecorgi.com/250"
                                alt="Dummy"></img>
                        </a>
                    </figure>
                </div>
                <div className="content">
                    <p className="title is-4">MODS</p>
                    <p className="subtitle is-6">{props.modList}</p>
                </div>
                <footer className="card-footer">
                    {/* <!-- Skills & technologies used in application --> */}
                    <p className="subtitle is-small">
                        "Uncle Ben's Original"
                    </p>
                </footer>
            </div>
        </div>
    );
};