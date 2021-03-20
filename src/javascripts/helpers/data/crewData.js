import axios from 'axios';
import firebaseConfig from './auth/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET CREW CARDS
const getCrews = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/crews.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// GET CREW MEMBER
const getSingleCrew = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/crews/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export { getCrews, getSingleCrew };