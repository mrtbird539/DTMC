import React from "react";

export const CarCard = (props: any) => {

    return (

        <div className="car-border has-background-black column is-4 is-offset-1">
            <div className="card is-fullwidth card-back-color">
                <header className="card-back-color card-header">
                    <p className="has-text-white card-header-title">
                        {props.title}
                    </p>
                </header>
                <div className="car-border card-back-color card-image">
                    <figure className="image">
                        <a href={props.userCarPhoto} target="_blank" rel="noopener noreferrer">
                            <img src={props.userCarPhoto}
                                alt="CarPhoto"></img>
                        </a>
                    </figure>
                </div>
                <div className="content">
                    <p className="has-text-white title is-4">Modifications:</p>
                    <p className="has-text-white subtitle is-6">{props.modList}</p>
                </div>
                {props.editCarButton}
                <footer className="card-footer">
                    <p className="has-text-white subtitle is-small">{props.userInfo}</p>
                </footer>
            </div>
        </div>
    );
};