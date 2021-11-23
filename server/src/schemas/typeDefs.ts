import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type User {
        _id: ID!
        userName: String!
        email: String!
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

    type Query {
        me: User
        user: [Car]
        byYear(year: Int!): Car
        byMake(make: String!): Car
        byModel(model: String!): Car
        carCarousel: Car
        carSearchYMM: Car
        carFindOne: Car
        userGarage: User

        car: [Car]
    }

    type Mutation {
        userCreate(userName: String!, email: String!): User
        carCreate: User
        carUpdate: User
        carDelete(_id: ID!): Car
    }
 `;


