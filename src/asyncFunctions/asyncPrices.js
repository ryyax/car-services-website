import axios from 'axios';

const pricesURL = 'http://localhost:3000/prices';

export async function getPrices() {
    let response = await axios.get(pricesURL);
    return response.data;
}
