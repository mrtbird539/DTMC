import React from "react";

export const EditCard = (props: any) => {

    return (
        <div className="column is-4 is-offset-1">
            <div className="card is-fullwidth">
                
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
                                <a href="http://placecorgi.com/250" target="_blank" rel="noopener noreferrer">
                                    <img src="http://placecorgi.com/250"
                                        alt="Dummy"></img>
                                </a>
                            </figure>
                        </div>
                        <div className="field">
                            <label className="label">Photo </label>
                            <div className="control">
                                <textarea className="input" id="description" placeholder="Enter URL Here" name="description"></textarea>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Mods:</label>
                            <div className="control">
                                <textarea className="textarea" id="description" placeholder={props.mods} name="description"></textarea>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Footer:</label>
                            <div className="control">
                                <textarea className="input" id="description" placeholder="Footer" name="description"></textarea>
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