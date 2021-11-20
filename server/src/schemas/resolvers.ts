import { Car, User } from "../models";

export const resolvers = {
  Query: {
    // GET 4 most recently added cars
    carCarousel: async () => {
      return Car.find().sort({ createdAt: -1 }).limit(4)
    },

    // GET car by year, make, and model
    carSearchYMM: async ({ year, make, model }: any) => {
      return Car.find({ year, make, model }).sort({ createdAt: -1 })
    },

    // GET car by ID
    carFindOne: async ({ _id }: any) => {
      return Car.findById({ _id })
    },

    // GET user's garage
    userGarage: async ({ _id }: any) => {
      return User.findById({ _id }).populate('cars')
    },
  },

  Mutation: {
    // CREATE new car
    carCreate: async (args: object) => {
      return Car.create(args)
    },

    // UPDATE existing car
    carUpdate: async (args: object) => {
      return Car.findOneAndUpdate(args)
    },

    // DELETE car by id
    carDelete: async ({ _id }: any) => {
      return Car.findOneAndDelete({ _id })
    }
  },
};


