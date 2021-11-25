import React, { useState, useEffect } from 'react';

import { Description } from '../components/description';
import { CarCard } from '../components/carCard';
import { EditCard } from '../components/editCard';
import { DropDown } from '../components/dropDown';



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
            <CarCard title={"Corgi Mobile"} mods={"Huge Spoiler, Chunky Exhaust, Removed Governer"} />
            <EditCard title={"Corgi Mobile"} mods={"Huge Spoiler, Chunky Exhaust, Removed Governer"} />
            <br />
        </>
    );
};