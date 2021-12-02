import React, { useState, useEffect } from 'react';

import { CarCard } from '../components/carCard';
import { EditCard } from '../components/editCard';

const dummyCars = [
    {
        _id: "619c4fc8f17a58b7e008d83c",
        year: 2006,
        make: "Honda",
        model: "Civic Si",
        mod_preformance: "Removed Governer",
        mod_functional: "Huge Spoiler",
        mod_cosmetic: "Underglow",
        owner: ["61993b9d8173b3b9b903c56b"],
        createdAt: " 2021-11-23T02:19:52.878+00:00",
        __v: 0,
        photo: "http://buzzsharer.com/wp-content/uploads/2016/06/corgi-in-car.jpg"
    },
    {
        _id: "619c4fc8f17a58b7e008bb87",
        year: 2006,
        make: "Mitsubishi",
        model: "Lancer EVO",
        mod_preformance: "NO2",
        mod_functional: "Dropped",
        mod_cosmetic: "White Tires",
        owner: ["61993b9d8173b3b9b903c56b"],
        createdAt: " 2021-11-28T02:19:52.878+00:00",
        __v: 0,
        photo: "http://buzzsharer.com/wp-content/uploads/2016/06/corgi-in-car.jpg"
    },
    {
        _id: "619c4fc8f17a58b7e008ggy7",
        year: 2006,
        make: "Isuzu",
        model: "Box Truck",
        mod_preformance: "Diesel Conversion",
        mod_functional: "Freezer Added",
        mod_cosmetic: "Ice Cream Cone on Top",
        owner: ["61993b9d8173b3b9b903c56b"],
        createdAt: " 2021-11-28T02:19:52.878+00:00",
        __v: 0,
        photo: "http://buzzsharer.com/wp-content/uploads/2016/06/corgi-in-car.jpg"
    },
    {
        _id: "619c4fc8f17a58b7e008ggy7",
        year: 2006,
        make: "Isuzu",
        model: "Box Truck",
        mod_preformance: "Diesel Conversion",
        mod_functional: "Freezer Added",
        mod_cosmetic: "Ice Cream Cone on Top",
        owner: ["61993b9d8173b3b9b903c56b"],
        createdAt: " 2021-11-28T02:19:52.878+00:00",
        __v: 0,
        photo: "http://buzzsharer.com/wp-content/uploads/2016/06/corgi-in-car.jpg"
    }
];

const newCarModel = {
    isNew: true,
    _id: "",
    year: "",
    make: "",
    model: "",
    mod_preformance: "",
    mod_functional: "",
    mod_cosmetic: "",
    owner: [""],
    createdAt: "",
    __v: 0,
    photo: ""
};

export const GaragePage = () => {

    let initialState =
    //This will need to be an async function to call the DB
        <div className="columns is-multiline is-variable">
            {dummyCars.map((car, index) =>
                <>
                    <CarCard
                        key={car._id}
                        title={`${car.year} ${car.make} ${car.model}`}
                        modPerformance={car.mod_preformance}
                        modFunctional={car.mod_functional}
                        modCosmetic={car.mod_cosmetic}
                        userCarPhoto={car.photo}
                        owner={car.owner}
                        isUser={true}
                        setCars={() => renderEditCar(car._id, car)}
                    />
                </>
            )}
        </div>;

    let [myCars, setMyCars] = useState<object>(initialState);

    const renderEditCar = (carId: string, props: any) => {
        if (carId == props._id || carId == "") {
            return setMyCars(
                <>
                    <EditCard
                        key={props._id}
                        title={`${props.year} ${props.make} ${props.model}`}
                        modPerformance={props.mod_preformance}
                        modFunctional={props.mod_functional}
                        modCosmetic={props.mod_cosmetic}
                        userCarPhoto={props.photo}
                        owner={props.owner}

                    />
                    <div className="column is-4 is-offset-4">
                        <button onClick={() => setMyCars(initialState)} className="button is-link" id="submit" type="button">Save</button>
                        <button onClick={() => setMyCars(initialState)} className="button is-danger" id="submit" type="button">Cancel</button>
                    </div>
                </>
            )
        }
        return console.log("No such car!");
    }

    // JXS Component
    return (
        <>
            <br />
            <button onClick={() => renderEditCar("", newCarModel)} className="button is-large is-success" id="submit" type="button">+</button>
            <br />
            <br />
            {myCars}
            <br />
        </>
    );
};
