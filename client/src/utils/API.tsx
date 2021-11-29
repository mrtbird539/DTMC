import axios from "axios";

export const userSearch = (username: string) => {

    axios.request({
        method: 'GET',
        url: 'https://dev-fm4mjizr.us.auth0.com/api/v2/users',
        params: { q: username, search_engine: 'v3' },
        headers: { authorization: 'Bearer ' }
    }).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}
