import axios from 'axios';

export const httpClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  withCredentials: true
});
