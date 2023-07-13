import axios from 'axios';
const baseURL = 'https://painassasin.online/'
export const fetchAllTracks = () => {
  return axios
    .get(baseURL + 'catalog/track/all/')
    .then((response) => response.data);
};

export const fetchAllPlaylists = () => {
  return axios
  .get(baseURL + 'catalog/selection/')
  .then((response) => response.data);
}
