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
    }
];

export const GaragePage = () => {

    // Not currently implemented
    const checkForEdit = (isUser: any): boolean => {
        let isUserPage: boolean = false;
        if (isUser) {
            isUserPage = true;
            return isUserPage;
        };
        return isUserPage;
    };

    let initialState = <div className="columns is-multiline is-variable">
        {dummyCars.map((car, index) =>
            <>
                <CarCard key={car._id} title={`${car.year} ${car.make} ${car.model}`}
                    modList={`Performance: \n ${car.mod_preformance} \n Functional: \n ${car.mod_functional} \n Cosmetic: \n ${car.mod_cosmetic}`}
                    userCarPhoto={car.photo}
                    userInfo={car.createdAt}
                    owner={car.owner}
                />
                <button onClick={() => renderEditCar(car._id, car, false)} className="button is-link" id="submit" type="button">Edit</button>
            </>)}</div>;

    let [myCars, setMyCars] = useState<object>(initialState);

    const renderEditCar = (carId: string, props: any, isNewCar: boolean): any => {
        if (carId == props._id || carId == "") {
            return setMyCars(
                <>
                    <EditCard key={props._id} title={`${props.year} ${props.make} ${props.model}`}
                        modList={`Performance: \n ${props.mod_preformance} \n Functional: \n ${props.mod_functional} \n Cosmetic: \n ${props.mod_cosmetic}`}
                        userCarPhoto={props.photo}
                        userInfo={props.createdAt}
                        owner={props.owner}
                    />
                    <div className="column is-4 is-offset-1">
                        <button onClick={() => setMyCars(initialState)} className="button is-link" id="submit" type="button">Save</button>
                        <button onClick={() => setMyCars(initialState)} className="button is-link" id="submit" type="button">Cancel</button>
                    </div>
                </>
            )
        }
        return console.log("No such car!");
    }

    return (
        <>
            <br />
            <button onClick={() => renderEditCar("", "", true)} className="button is-success" id="submit" type="button">Add a car</button>
            <br />
            <br />
            {myCars}
            <br />
        </>
    );
};
