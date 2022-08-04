import axios from 'axios';

const baseUrl = 'http://localhost:3000/';

export const getData = (ext: string) => {
  return axios.get(`${baseUrl}${ext}`);
};
