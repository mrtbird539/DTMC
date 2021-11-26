import React from "react";

export const CarCard = (props: any) => {

    return (
        <div className="has-background-black column is-4 is-offset-1">
            <div className="card is-fullwidth">
                <header className="card-back-color card-header">
                    <p className="has-text-white card-header-title">
                        {props.title}
                    </p>
                </header>
                <div className="card-back-color card-image">
                    <figure className="image">
                        {/* <!-- Image is a link to the live site --> */}
                        <a href= {props.userCarPhoto} target="_blank" rel="noopener noreferrer">
                            <img src= {props.userCarPhoto}
                                alt="CarPhoto"></img>
                        </a>
                    </figure>
                </div>
                <div className="card-back-color content">
                    <p className="has-text-white title is-4">Modifications:</p>
                    <p className="has-text-white subtitle is-6">{props.modList}</p>

                </div>
                <footer className="card-back-color card-footer">
                    {/* <!-- Skills & technologies used in application --> */}
                    <p className="has-text-white subtitle is-small">{props.userInfo}</p>
                </footer>
            </div>
        </div>
    );
};