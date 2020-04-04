import axios from 'axios';

export const httpClient = axios.create({
  baseURL:
    'https://stagingapi.whynot.earth/api/v0/pages/slug/bang-bang-bakery-cafe/'
});
