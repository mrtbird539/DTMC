import { Car, User } from "../models";

export const resolvers = {
  Query: {
    car: async () => {
      return Car.find({})
    },

  },

  Mutation: {
    createCar: async (args:object) => {
      const newCar = await Car.create(args);
      return newCar;
    },
  },
};


