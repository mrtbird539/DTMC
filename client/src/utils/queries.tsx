import { gql } from "@apollo/client";

export const FIND_USER = gql`
query findUser ($email: String!) {
    findUser(email: $email) {
        _id
        userName
        email
        cars
    }

}`

export const CAR_SEARCH_YMM = gql`

query carSearchYMM (year: Int!, make: String!, model: String!) {
    carSearchYMM (year: $year, make: $make, model: $model) {
        _id
        year
        make
        model
        mod_preformance
        mod_functional
        mod_cosmetic
        photo
    }
}`