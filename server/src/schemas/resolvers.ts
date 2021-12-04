import { Car, User } from "../models";
import { auth } from "express-openid-connect";


export const resolvers = {
  Query: {
    findUser: async (parent: any, { email }: { email: string}) => {
      const user = await User.findOne({ email });
      return user;
    },
    // GET 4 most recently added cars
    carCarousel: async () => {
      return Car.find().sort({ createdAt: -1 }).limit(4)
    },

    // GET car by year, make, and model
    carSearchYMM: async (parent: any, { year, make, model }: {year: number, make: string, model: string}) => {
      return Car.find({ year, make, model });
    },

    // GET car by ID
    carFindOne: async ({ _id }: any) => {
      return Car.findById({ _id })
    },

    // GET user's garage
    userGarage: async ({ User: email }: any) => {
      return Car.find({ email }).populate('cars')
    },
  },

  Mutation: {
    //CREATE USER
    userCreate: async (parent: any, args: object) => {

      const newUser = await User.create(args);
      return newUser;

    },
    //CREATE new car
    carCreate: async (parent: any, { email }: {email: string}, { carData }: any) => {
      const updatedUser = await User.findOneAndUpdate(
        { email },
        { $push: { cars: { carData } } },
        { new: true }
      )
      return updatedUser;
    },

    // UPDATE existing car
    carUpdate: async (args: object) => {
      return Car.findOneAndUpdate(args)
    },

    // DELETE car by id
    carDelete: async ({ _id }: any) => {
      return Car.findOneAndDelete({ _id })
    }
  }
}



