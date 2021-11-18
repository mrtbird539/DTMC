import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type User {
        _id: ID
        userName: String
        email: String
        cars: [Car]
    }

    type Car {
        _id: ID
        year: Int
        make: String
        model: String
        mod_preformance: String
        mod_functional: String
        mod_cosmetic: String
        user: User
    }

    input CarInput {
        year: Int!
        make: String!
        model: String!
        mod_preformance: String
        mod_functional: String
        mod_cosmetic: String
    }

    type Query {
        me: User
        user: [Car]
        byYear(year: Int!): Car
        byMake(make: String!): Car
        byModel(model: String!): Car
    }

    type Mutation {
        saveCar(carData: CarInput!): User
        editCar: Car
        deleteCar(_id: ID!): Car
    }
 `;


