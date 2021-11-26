import React from "react";

export const EditCard = (props: any) => {

    return (
        <div className="has-background-black column is-4 is-offset-1">
            <div className="card-back-color card is-fullwidth">
                
            <form className="form new-project-form">
                <div className="column">
                    <div className="column is-full">
                        <div className="field">
                            <label className="label">Car Name:</label>
                            <div className="control">
                                <input className="input" type="text" id="category" name="category" placeholder={props.title}/>
                            </div>
                        </div>

                        <div className="card-image">
                            <figure className="image">
                                {/* <!-- Image is a link to the live site --> */}
                                <a href={props.userCarPhoto} target="_blank" rel="noopener noreferrer">
                                    <img src={props.userCarPhoto}
                                        alt="CarPhoto"></img>
                                </a>
                            </figure>
                        </div>
                        <div className="field">
                            <label className="label">Photo:</label>
                            <div className="control">
                                <textarea className="input" id="description" placeholder="Enter URL Here" name="description"></textarea>
                            </div>
                        </div>

                        <div className="card-back-color field">
                            <label className="has-text-white label">Modifications:</label>
                            <div className="has-text-white control">
                                <textarea className="textarea" id="description" placeholder={props.mods} name="description"></textarea>
                            </div>
                        </div>

                        <div className="card-back-color field">
                            <label className="has-text-white label">Footer:</label>
                            <div className="control">
                                <textarea className="has-text-white input" id="description" placeholder={props.userInfo} name="description"></textarea>
                            </div>
                        </div>

                        <div className="notification is-primary added">
                            Changes Saved!
                        </div>

                        <div className="notification is-danger complete">
                            Error!
                        </div>

                        <div className="field is-grouped">
                            <div className="control">
                                <button className="button is-link" id="submit" type="button">Save</button>
                                <button className="button is-danger" id="submit" type="button">Cancel</button>
                            </div>
                        </div>

                        <div className="field is-grouped">
                            <div className="control">
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            </div>
        </div>
    );
};