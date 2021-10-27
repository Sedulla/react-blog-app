import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://react-blog-app-rest-api.herokuapp.com/api/',
});
