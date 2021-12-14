import { Car } from "../models";
import { auth } from "express-openid-connect";


export const resolvers = {
  Query: {
    allCars: async () => {
      return await Car.find({})
    },
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
      return await Car.create(args.carInput);
    },

    // UPDATE existing car
    carUpdate: async (_parent: any, { _id }: { _id: string }) => {
      return Car.findOneAndUpdate({ _id })
    },

    // DELETE car by id
    carDelete: async (_parent: any, args: any) => {
      return Car.findOneAndDelete(args)
    }
  }
}



