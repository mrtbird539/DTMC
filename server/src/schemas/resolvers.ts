import { Car } from "../models";
import { auth } from "express-openid-connect";


export const resolvers = {
  Query: {
    // GET car by year, make, and model
    carSearchYMM: async (_parent: any, args: any) => {
      return await Car.find(args);
    },
    myGarage: async (_parent: any, args: any) => {
      return await Car.find(args);
    }
  },

  Mutation: {
    //CREATE new car
    carCreate: async (_parent: any, args: any) => {
      return await Car.create(args);
    },

    // UPDATE existing car
    carUpdate: async (_parent: any, args: any) => {
      return Car.findOneAndUpdate(args)
    },

    // DELETE car by id
    carDelete: async (_parent: any, args: any) => {
      return Car.findOneAndDelete(args)
    }
  }
}



