/** Generate by swagger-axios-codegen */
import axiosStatic from 'axios';
// Add default options
export const serviceOptions = {};
// Instance selector
function axios(configs) {
  return serviceOptions.axios
    ? serviceOptions.axios.request(configs)
    : axiosStatic(configs);
}

export class AuthenticationService {
  static ping(params = {}, options = {}) {
    return new Promise((resolve, reject) => {
      const configs = Object.assign({}, options, { method: 'get' });
      configs.headers = Object.assign({}, options.headers, {
        'Content-Type': 'application/json'
      });

      let url = '/api/v0/authentication/ping';
      configs.url = url;
      configs.params = params;
      let data = null;
      configs.data = data;
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
