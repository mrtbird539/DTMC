import React from "react";

export const CarCard = (props: any) => {

    const checkForEdit = (isUser: boolean): object => {
        if (isUser) {
            return <button onClick={props.setCars} className="button is-warning is-fullwidth is-rounded fontChange" id="submit" type="button">Edit</button>

        };
        return <></>;
    };

    return (
        <>
            <div className="car-border has-background-black column is-4">
                <div className="card is-fullwidth card-back-color is-offset-1">
                    <header className="card-back-color card-header">
                        <p className="title is-3">
                            {props.title}
                        </p>
                    </header>
                    <div className="card-back-color card-image">
                        <figure className="image">
                            <a href={props.userCarPhoto} target="_blank" rel="noopener noreferrer">
                                <img src={props.userCarPhoto}
                                    alt="CarPhoto"></img>
                            </a>
                        </figure>
                    </div>
                    <br />
                    <div className="content">
                        <p className="title is-4">Performance Mods</p>
                        <p className="has-text-white subtitle is-6">{props.modPerformance}</p>
                    </div>
                    <div className="content">
                        <p className="title is-4">Functional Mods</p>
                        <p className="has-text-white subtitle is-6">{props.modFunctional}</p>
                    </div>
                    <div className="content">
                        <p className="title is-4">Cosmetic Mods</p>
                        <p className="has-text-white subtitle is-6">{props.modCosmetic}</p>
                    </div>
                    {checkForEdit(props.isUser)}
                </div>
            </div>
        </>
    );
};