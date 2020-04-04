import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'https://stagingapi.whynot.earth/api/v0'
});
