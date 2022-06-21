import axios from 'axios';

const servicesURL = 'http://localhost:3000/services';

export async function getServices() {
    let response = await axios.get(servicesURL);
    return response.data;
}
