import { BASE_API } from '@/connection/api';
import axios from 'axios';

const ajax = axios.create({
  baseURL: BASE_API,
  timeout: 20000,
  // withCredentials should be here and moving it to default headers wont work
  withCredentials: true
});

ajax.defaults.headers = {
  'Content-Type': 'application/json'
  // 'Accept-Language': 'en-US,en;q=0.5'
};

export { ajax };
