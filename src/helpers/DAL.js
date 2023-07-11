import axios from 'axios';

export const fetchAllTracks = () => {
  return axios
    .get('https://painassasin.online/catalog/track/all/')
    .then((response) => response.data);
};
