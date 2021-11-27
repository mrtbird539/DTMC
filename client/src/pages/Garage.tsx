import React, { useState, useEffect } from 'react';

import { Description } from '../components/description';
import { CarCard } from '../components/carCard';
import { EditCard } from '../components/editCard';
import { EditCarButton } from '../components/EditCarButton';
import LoginButton from '../components/login';
// import { DropDown } from '../components/dropDown';

const dummyCar = {
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
};

export const GaragePage = () => {


    const [myCars, setMyCars] = useState([]);

    // useEffect(() => {
    // Do something here
    // })

    // Returns the tsx car page
    return (
        <>
            {/* <DropDown /> */}
            <Description bio={"Hey check out my page"} />

            <CarCard title={`${dummyCar.make} ${dummyCar.model}`}
                modList={`Performance: \n ${dummyCar.mod_preformance} \n Functional: \n ${dummyCar.mod_functional} \n Cosmetic: \n ${dummyCar.mod_cosmetic}`}
                userCarPhoto={dummyCar.photo}
                userInfo={"Put Your Contact Info Here!"}
                editCarButton={<EditCarButton owner={[]} />}
            />

            <EditCard title={`${dummyCar.make} ${dummyCar.model}`}
                modList={`Performance: \n ${dummyCar.mod_preformance} \n Functional: \n ${dummyCar.mod_functional} \n Cosmetic: \n ${dummyCar.mod_cosmetic}`}
                userCarPhoto={dummyCar.photo}
                userInfo={"Put Your Contact Info Here!"}
            />

            <br />
        </>
    );
};