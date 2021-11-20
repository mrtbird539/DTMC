import db from "../config/connection";
import { Car, User } from "../models";
import carData  from "./carData.json";
import userData from "./userData.json"

db.once("open", async () => {
    await Car.deleteMany({});

    await User.deleteMany({});

    const car = await Car.insertMany(carData);

    const user = await User.insertMany(userData);

    console.log("Data Seeded!");

    process.exit(0);

});


