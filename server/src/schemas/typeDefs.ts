import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type Car {
        _id: ID
        year: Int
        make: String
        model: String
        mod_preformance: String
        mod_functional: String
        mod_cosmetic: String
        photo: String
        user: String
    }

    type Query {
        carSearchYMM(year: Int!, make: String!, model: String!): [Car]
        myGarage(user: String!): [Car]
       
    }

    type Mutation {
        carCreate(year: Int, make: String, model: String, mod_preformance: String, mod_functional: String, mod_cosmetic: String, photo: String, user: String): Car
        carUpdate(_id: ID!): Car
        carDelete(_id: ID!): Car
    }
 `;


