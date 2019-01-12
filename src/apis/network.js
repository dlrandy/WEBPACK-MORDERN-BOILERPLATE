import axios from 'axios';

export default class Network {
  static async handleResponse(axiosPromise) {
    try {
      const { data, status, statusText } = await axiosPromise;
      if ((status >= 200 && status < 300) || status === 304) {
        return {
          data
        };
      } else {
        throw Error({
          message: statusText,
          status
        });
      }
    } catch (error) {
      return error;
    }
  }
  constructor(options = {}) {
    const { headers = {}, url = '' } = options;
    this.instance = axios.create({
      baseURL: url,
      timeout: 12000,
      ...options,
      headers: { Pragma: 'no-cache', 'Cache-Control': 'no-cache', ...headers }
    });
  }
}
