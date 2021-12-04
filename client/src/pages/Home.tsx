import React, { useState } from 'react';
import { DropDown } from '../components/dropDown';
import { CarCard } from '../components/carCard';
import { NoCarsFound } from '../components/NoCarsFound';
import { Empty } from '../components/Empty';

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
        owner: [],
        createdAt: " 2021-11-28T02:19:52.878+00:00",
        __v: 0,
        photo: "http://buzzsharer.com/wp-content/uploads/2016/06/corgi-in-car.jpg"
    },
    {
        _id: "619c4fc8f17a58b7e008bb88",
        year: 2003,
        make: "Ford",
        model: "Focus",
        mod_preformance: "8-Speed Addition",
        mod_functional: "8-Pack of Sprite Cranberry",
        mod_cosmetic: "8-Massive Dents",
        owner: ["61993b9d8173b3b9b903c56b"],
        createdAt: " 2021-11-28T02:19:52.878+00:00",
        __v: 0,
        photo: "http://buzzsharer.com/wp-content/uploads/2016/06/corgi-in-car.jpg"
    }
];

//This needs to be from the
const matchedCars = { make: "Honda", model: "Civic", year: 2021 }
const empty = <Empty />

export function HomePage() {

    let noCarState:JSX.Element =
        <>
            <NoCarsFound />
            <br />
            <div className="columns">
                <div className="column is-4 is-offset-4">
                    <button onClick={() => setMyCars(initialState)} className="button is-warning is-large" id="submit" type="button">Return</button>
                </div>
            </div>
        </>

    //This function searches for matching cars
    //NOW make it take a value from the search bar
    const searchCar = async () => {
        //Fetch request 
        const buildCars: any[] = await dummyCars.filter(car => car.make == matchedCars.make && car.model == matchedCars.model && car.year == matchedCars.year);
        console.log(buildCars);
        buildSearchedCars(buildCars);
    };

    //This code is sopping wet
    const buildSearchedCars = (cars: any[]) => {
        let newState:JSX.Element =
            <>
                <button onClick={() => searchCar()} className="button is-large is-success" id="submit" type="button">Search</button>
                <br />
                <br />
                <div className="columns is-multiline is-centered is-variable">
                    {cars.map((car) =>
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
                    )}
                </div>
                <br />
                <div className="columns">
                    <div className="column is-4 is-offset-4">
                        <button onClick={() => setMyCars(initialState)} className="button is-warning is-large" id="submit" type="button">Return</button>
                    </div>
                </div>
            </>
        if (cars.length == 0) {
            return setMyCars(noCarState);
        }
        setMyCars(empty);
        setMyCars(newState);
    };

    let initialState:JSX.Element =
        <>
            <button onClick={() => searchCar()} className="button is-large is-success" id="submit" type="button">Search</button>
            <br />
            <br />
            <div className="column is-6 is-offset-3">
                <p className="title is-3 is-italic">Here are some fresh rides...</p>
            </div>
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
                            isUser={false}
                        />
                    </>
                )}
            </div>
        </>

    let [homeCars, setMyCars] = useState<object>(initialState);


    return (
        <>
            <div className="column is-6 is-offset-3">
                <p className="title is-2">Search other people's rides</p>
            </div>
            <DropDown />
            <br />
            {homeCars}
            <br />
        </>
    );
};