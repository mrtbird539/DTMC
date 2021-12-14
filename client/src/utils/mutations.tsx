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

mutation carCreate($carInput: CarInput) {
    carCreate(carInput: $input) {
      _id
      year
      make
      model
      mod_preformance
      mod_functional
      mod_cosmetic
      photo
      user
      createdAt
    }
  }
`;
