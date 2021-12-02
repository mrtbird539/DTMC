import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type User {
        _id: ID
        userName: String
        email: String
        cars: [Car]
    }

    type Car {
        year: Int
        make: String
        model: String
        mod_preformance: String
        mod_functional: String
        mod_cosmetic: String
    }

    input CarInput{
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
        car: [Car]
        carCarousel: [Car]
        carSearchYMM: [Car]
        carFindOne(_id: ID!): Car
        userGarage(_id: ID!): User
    }

    type Mutation {
        userCreate(userName: String!, email: String!): User
        carCreate(carData: CarInput!): User
        carUpdate: User
        carDelete(_id: ID!): Car
    }
 `;


