import { createAxiosClient } from "./createAxiosClient";

const BASE_URL = 'https://metallo.ew.r.appspot.com/'


export const axiosClient = createAxiosClient({
  options: {
      baseURL: BASE_URL,
      timeout: 300000,
      headers: {
          'Content-Type': 'application/json',
      }
  }
})