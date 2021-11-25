import React from "react";


export const CarCard = (props: any) => {

    return (
        <div className="has-background-grey-darker column is-4 is-offset-1">
            <div className="has-background-danger card is-fullwidth">
                <header className="card-header">
                    <p className="has-text-white card-header-title">
                        {props.title}
                    </p>
                </header>
                <div className="has-background-danger card-image">
                    <figure className="image">
                        {/* <!-- Image is a link to the live site --> */}
                        <a href= {props.userCarPhoto} target="_blank" rel="noopener noreferrer">
                            <img src= {props.userCarPhoto}
                                alt="CarPhoto"></img>
                        </a>
                    </figure>
                </div>
                <div className="has-background-danger content">
                    <p className="has-text-black title is-4">Modifications:</p>
                    <p className="has-text-white subtitle is-6">{props.modList}</p>

                </div>
                <footer className="has-background-danger card-footer">
                    {/* <!-- Skills & technologies used in application --> */}
                    <p className="has-text-white subtitle is-small">{props.userInfo}</p>
                </footer>
            </div>
        </div>
    );
};