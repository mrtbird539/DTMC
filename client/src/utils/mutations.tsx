import gql from "graphql-tag";

export const CREATE_USER = gql`

mutation userCreate($userName: String!, $email: String) {
    userCreate(userName: $userName, email: $email) {
        _id
        userName
        email
    }
}`