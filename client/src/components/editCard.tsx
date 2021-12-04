import React, { useRef, Fragment, useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import { makeOptions, yearOptions } from "../utils/ymm";


export const EditCard = (props: any) => {

    const [year, setYear] = useState<number | undefined>();
    const [make, setMake] = useState<string | undefined>();
    const [model, setModel] = useState<string | undefined>();
    const [modP, setModP] = useState<string | undefined>("");
    const [modF, setModF] = useState<string | undefined>("");
    const [modC, setModC] = useState<string | undefined>("");
    const [photo, setPhoto] = useState<string | undefined>("");
    const [modelOptions, setModelOptions] = useState<
        { value: string; label: string }[]
    >([]);

    useEffect(() => {
        if (make) {
            getModel(make, year);
        }
    }, [make]);

    const getModel = async (make: any, year: any) => {
        const result = await axios.get(
            `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/${make}/modelyear/${year}?format=json`
        );
        const data = result.data.Results;
        console.log(data);
        const options = data.map((r: { Model_Name: string }) => ({
            value: r.Model_Name,
            label: r.Model_Name,
        }));
        setModelOptions(options);
    };

    if (make && model && year) {
        console.log(make, model, year)
    };



    let save = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(modF);
        console.log(modC);
        console.log(photo);

        const newCar = {
            year: year,
            make: make,
            model: model,
            mod_preformance: modP,
            mod_functional: modF,
            mod_cosmetic: modC,
            photo: photo
        };

        console.log(newCar)
    }


    const returnEmptyIfEmpty = (value: string): string => {
        if (value == "") {
            return "";
        }
        return value;
    };

    return (
        <div className="has-background-black column is-6 is-offset-3">
            <div className="card-back-color card is-fullwidth">
                <form className="form new-project-form" onSubmit={save}>
                    <div className="column">
                        <div className="column is-full">
                            <div className="field">
                                <label className="label">{props.title}</label>
                            </div>

                            <div className="card-back-color field">
                                <label className="label">Make, Model, Year</label>
                                <div className="control">
                                    <Fragment>
                                        <Select options={yearOptions} placeholder={"Year"} onChange={(e) => setYear(e?.value)} />
                                        <Select
                                            placeholder={"Make"}
                                            options={makeOptions}
                                            isDisabled={!year}
                                            onChange={(e) => setMake(e?.value)}
                                        />
                                        <Select
                                            placeholder={"Model"}
                                            options={modelOptions}
                                            isDisabled={!make}
                                            onChange={(e) => setModel(e?.value)}
                                        />
                                    </Fragment>
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
                                    <input className="input" onChange={(e: any) => setPhoto(e?.target.value)} id="photo" placeholder="Enter URL Here" name="photo"></input>
                                </div>
                            </div>

                            <div className="card-back-color field">
                                <div className="has-text-white control">
                                    <label className="label">Performance Mods</label>
                                    <input className="input" onChange={(e: any) => setModP(e?.target.value)} id="performance-mods" placeholder={props.modPerformance} name="performance-mods"></input>
                                </div>
                            </div>
                            <div className="card-back-color field">
                                <div className="has-text-white control">
                                    <label className="label">Functional Mods</label>
                                    <input className="input" onChange={(e: any) => setModF(e?.target.value)} id="functional-mods" placeholder={props.modFunctional} name="functional-mods"></input>
                                </div>
                            </div>
                            <div className="card-back-color field">
                                <div className="has-text-white control">
                                    <label className="label">Cosmetic Mods</label>
                                    <input className="input" onChange={(e: any) => setModC(e?.target.value)} id="cosmetic-mods" placeholder={props.modCosmetic} name="cosmetic-mods"></input>
                                </div>
                            </div>
                        </div>
                        <div className="control">
                            <button className="button is-link" id="submit" type="submit">
                                <a className="button is-link" href="/myGarage">Save</a>
                            </button>
                            <button className="button is-danger" id="submit" type="submit">
                                <a className="button is-danger" href="/myGarage">Cancel</a>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};