import axios from 'axios';

export function createAxiosClient({
  options
}) {
  const client = axios.create(options);
  client.interceptors.request.use(
    (config) => {
      if (config.authorization !== false) {
        const token = 'tokenZarbi'
        if (token) {
          config.headers.Authorization = "Bearer " + token;
        }
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

 return client;
}