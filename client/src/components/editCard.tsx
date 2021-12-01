import React from "react";
import { DropDown } from '../components/dropDown';


export const EditCard = (props: any) => {

    const returnEmptyIfEmpty = (value: string): string => {
        if (value == "") {
            return "";
        }
        return value;
    };


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
                                    <DropDown />
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
                                    <textarea className="input" id="description" placeholder="Enter URL Here" name="description"></textarea>
                                </div>
                            </div>

                            <div className="card-back-color field">
                                <div className="has-text-white control">
                                    <label className="label">Performance Mods</label>
                                    <textarea className="input" id="description" placeholder={props.modPerformance} name="description"></textarea>
                                </div>
                            </div>
                            <div className="card-back-color field">
                                <div className="has-text-white control">
                                    <label className="label">Functional Mods</label>
                                    <textarea className="input" id="description" placeholder={props.modFunctional} name="description"></textarea>
                                </div>
                            </div>
                            <div className="card-back-color field">
                                <div className="has-text-white control">
                                    <label className="label">Cosmetic Mods</label>
                                    <textarea className="input" id="description" placeholder={props.modCosmetic} name="description"></textarea>
                                </div>
                            </div>

                            <div className="card-back-color field">
                                <label className="label">Footer:</label>
                                <div className="control">
                                    <textarea className="has-text-white input" id="description" placeholder={props.userInfo} name="description"></textarea>
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