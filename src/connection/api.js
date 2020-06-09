let base_api = 'https://stagingapi.whynot.earth';

if (process.env.VUE_APP_API_ENDPOINT) {
  base_api = process.env.VUE_APP_API_ENDPOINT;
}

export { base_api as BASE_API };
