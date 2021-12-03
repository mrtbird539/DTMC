import React from "react";
import { DropDown } from '../components/dropDown';


export const EditCard = (props: any) => {

    const returnEmptyIfEmpty = (value: string): string => {
        if (value == "") {
            return "";
        }
        return value;
    };

    // const saveBtn = (props: any) => {
    //     return<button onClick={props.saveBtn} className="button is-link" id="submit" type="button">Save</button>
    // };

    // const cancelBtn = (props: any) => {
    //     return <button onClick={props.canelBtn} className="button is-danger" id="submit" type="button">Cancel</button>
    // };


    return (
        <div className="has-background-black column is-6 is-offset-3">
            <div className="card-back-color card is-fullwidth">

                <form className="form new-project-form">
                    <div className="column">
                        <div className="column is-full">
                            <div className="field">
                                <label className="label">{props.title}</label>
                            </div>

                            <div className="card-back-color field">
                                <label className="label">Make, Model, Year</label>
                                <div className="control">
                                    <DropDown className="dropdown" id="dropdown" name="dropdown"/>
                                </div>
                            </div>

                            <div className="card-image">
                                <figure className="image">
                                    <a href={props.userCarPhoto} target="_blank" rel="noopener noreferrer">
                                        <img src={returnEmptyIfEmpty(props.userCarPhoto)}></img>
                                    </a>
                                </figure>
                            </div>
                            <div className="field">
                                <label className="label">Photo:</label>
                                <div className="control">
                                    <textarea className="input" id="photo" placeholder="Enter URL Here" name="photo"></textarea>
                                </div>
                            </div>

                            <div className="card-back-color field">
                                <div className="has-text-white control">
                                    <label className="label">Performance Mods</label>
                                    <textarea className="input" id="performance-mods" placeholder={props.modPerformance} name="performance-mods"></textarea>
                                </div>
                            </div>
                            <div className="card-back-color field">
                                <div className="has-text-white control">
                                    <label className="label">Functional Mods</label>
                                    <textarea className="input" id="functional-mods" placeholder={props.modFunctional} name="functional-mods"></textarea>
                                </div>
                            </div>
                            <div className="card-back-color field">
                                <div className="has-text-white control">
                                    <label className="label">Cosmetic Mods</label>
                                    <textarea className="input" id="cosmetic-mods" placeholder={props.modCosmetic} name="cosmetic-mods"></textarea>
                                </div>
                            </div>
                            {/* 
                        <div className="field is-grouped">
                            <div className="control">
                                <button className="button is-success" id="submit" type="button">Save</button>
                                <button className="button is-danger" id="submit" type="button">Cancel</button>
                            </div>
                        </div> */}

                            <div className="field is-grouped">
                                {/* {saveBtn}
                                {cancelBtn} */}
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