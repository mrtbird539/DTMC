import React, { useState, useEffect } from 'react';

import { CarCard } from '../components/carCard';
import { EditCard } from '../components/editCard';

import { useMutation } from '@apollo/client';
import { CREATE_VEHICLE } from '../utils/mutations';
import { useAuth0, User } from "@auth0/auth0-react";

const dummyCars = [
    {
        _id: "619c4fc8f17a58b7e008d83c",
        year: 2021,
        make: "Honda",
        model: "Civic",
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
        year: 2010,
        make: "Mitsubishi",
        model: "Lancer",
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
        model: "Ascender",
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
        model: "Ascender",
        mod_preformance: "Diesel Conversion",
        mod_functional: "Freezer Added",
        mod_cosmetic: "Ice Cream Cone on Top",
        owner: [],
        createdAt: " 2021-11-28T02:19:52.878+00:00",
        __v: 0,
        photo: "http://buzzsharer.com/wp-content/uploads/2016/06/corgi-in-car.jpg"

    }
    ,
    {
        _id: "619c4fc8f17a58b7e008gg34",
        year: 2006,
        make: "Accura",
        model: "RL",
        mod_preformance: "Cold-Air Intake",
        mod_functional: "Straight Pipe Exhaust",
        mod_cosmetic: "Sunroof",
        owner: [],
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
    const { user, isAuthenticated }: User = useAuth0();
    // const { email } = user;

    const [createCar] = useMutation(CREATE_VEHICLE);
    const handleAddCar = async () => {
        const { data } = await createCar({
            variables: { carData: newCarModel }
        })

    }

    let initialState: JSX.Element =
        <>
            <button onClick={() => renderEditCar("", newCarModel)} className="button is-large is-success" id="submit" type="button">+</button>
            <br />
            <br />
            {/* //This will need to be an async function to call the DB */}
            <div className="columns is-multiline is-centered is-variable">
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
            </div>
        </>;

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
                </>
            )
        }
        return console.log("No such car!");
    }

    // JXS Component
    return (
        <>
            <div className="column is-6 is-offset-3">
                <p className="title is-2">My Garage</p>
            </div>
            <br />
            {myCars}
            <br />
        </>
    );
};
