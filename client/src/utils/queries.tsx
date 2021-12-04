import { gql } from "@apollo/client";

export const CAR_SEARCH_YMM = gql`
query CarSearchYMM($year: Int!, $make: String!, $model: String!) {
  carSearchYMM(year: $year, make: $make, model: $model) {
    _id
    year
    make
    model
    mod_preformance
    mod_functional
    mod_cosmetic
    photo
    user
  }
}`

export const MY_GARAGE = gql`
query MyGarage($user: String!) {
  myGarage(user: $user) {
    _id
    year
    make
    model
    mod_preformance
    mod_functional
    mod_cosmetic
    photo
    user
  }
}
`

