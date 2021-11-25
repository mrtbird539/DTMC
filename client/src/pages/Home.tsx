import React from 'react';

import { Description } from '../components/description';
import { CarCard } from '../components/carCard';
import { EditCard } from '../components/editCard';

export function HomePage() {

    return (
        <>
            <Description bio={"This is the homepage, pretty slick ain't it?"} />
            <CarCard title={"Corgi Mobile"} mods={"Huge Spoiler, Chunky Exhaust, Removed Governer"} />
            <EditCard title={"Corgi Mobile"} mods={"Huge Spoiler, Chunky Exhaust, Removed Governer"} />
            <br />
        </>
    );
}