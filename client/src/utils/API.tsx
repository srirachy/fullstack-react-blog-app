import axios from 'axios';

const baseUrl = 'http://localhost:9000/';

export default {
  getData: (ext: string) => {
    return axios.get(`${baseUrl}${ext}`);
  },
  deleteData: (ext: string, id: string) => {
    return axios.delete(`${baseUrl}${ext}${id}`);
  },
  addData: (ext: string, data: {}) => {
    return axios.post(`${baseUrl}${ext}`, data);
  },
};
