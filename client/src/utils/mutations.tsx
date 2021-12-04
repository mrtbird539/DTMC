import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation userCreate($userName: String!, $email: String!) {
    userCreate(userName: $userName, email: $email) {
      _id
      userName
      email
    }
  }
`;

export const CREATE_VEHICLE = gql`
  mutation carCreate($email: String!, $carData: CarInput!) {
    carCreate(email: $email, carData: $carData) {
      _id
      year
      make
      model
      mod_preformance
      mod_functional
      mod_cosmetic
      photo
      owner {
          email
      }
    }
  }
`;
