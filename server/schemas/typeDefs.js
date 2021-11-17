const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        _id: ID
        userName: String
        email: String
        cars: [Car]
    }

    type Car {
        _id: ID
        year: Number
        make: String
        model: String
        modification: [preformance, functional, cosmetic]
        user: User
    }

    type Query {
        me: User
        user(id: ID!): User
        
    }
`;

module.exports = typeDefs;
