import {gql} from "@apollo/client";

export const CREATE_USER = gql`

mutation userCreate($userName: String!, $email: String!) {
    userCreate(userName: $userName, email: $email) {
        _id
        userName
        email
    }
}`

export const CREATE_VEHICLE = gql`
mutation carCreate($carData: CarInput!) {
    _id
    userName
    email
    cars {
        year
        make
        model
        mod_preformance
        mod_functional
        mod_cosmetic
    }
}`