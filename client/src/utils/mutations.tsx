import { gql } from "@apollo/client";
// review userCreate Mutation
export const CREATE_USER = gql`
  mutation userCreate($userName: String!, $email: String!) {
    userCreate(userName: $userName, email: $email) {
        _id
        userName
        email
        cars
    }
  }
`;

export const CREATE_VEHICLE = gql`

mutation CarCreate($year: Int, $make: String, $model: String, $modPreformance: String, $modFunctional: String, $modCosmetic: String, $photo: String, $user: String) {
    carCreate(year: $year, make: $make, model: $model, mod_preformance: $modPreformance, mod_functional: $modFunctional, mod_cosmetic: $modCosmetic, photo: $photo, user: $user) {
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
`;
