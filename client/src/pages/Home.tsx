import React, { useState, useEffect } from 'react';
import { DropDown } from '../components/dropDown';
import { CarCard } from '../components/carCard';

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
        _id: "619c4fc8f17a58b7e008bb88",
        year: 2006,
        make: "Ford",
        model: "Focus SE",
        mod_preformance: "6-Speed Addition",
        mod_functional: "6-Pack of Sprite Cranberry",
        mod_cosmetic: "6-Massive Dents",
        owner: ["61993b9d8173b3b9b903c56b"],
        createdAt: " 2021-11-28T02:19:52.878+00:00",
        __v: 0,
        photo: "http://buzzsharer.com/wp-content/uploads/2016/06/corgi-in-car.jpg"
    }
];

export function HomePage() {

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
                        isUser={false}
                    />
                </>
            )}
        </div>;

    // const carSearch = (make, model, year) => {
    //     //Async function to search for a car
    // }

    let [homeCars, setMyCars] = useState<object>(initialState);


    return (
        <>
            <DropDown />
            <br />
            <button onClick={() => console.log("Woof!")} className="button is-large is-success" id="submit" type="button">Search</button>
            <br />
            <br />
            {homeCars}
            <br />
        </>
    );
}