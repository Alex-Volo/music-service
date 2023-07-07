export const getAllTracks = () => {
  return axios
    .get('https://painassasin.online/catalog/track/all/')
    .then((response) => response.data);
};
