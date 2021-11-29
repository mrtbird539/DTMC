import gql from "graphql-tag";

export const QUERY_YMM = gql`

query getCarsYMM {
    cars {
        _id
        year
        make
        model
        mod_preformance
        mod_functional
        mod_cosmetic
        user
    }


}
    `