import type {
  Axios,
  AxiosResponse,
  AxiosRequestConfig,
  AxiosError,
} from 'axios';
import axios from 'axios';

export default createApi();
export type { Routes };

type Routes =
  | '/codigopenal'
  | `/codigopenal/${number}`
  | '/usuarios'
  | '/status';

type CustomInstance = Omit<Axios, 'get' | 'post' | 'put' | 'delete'> & {
  get: <T = any, R = AxiosResponse<T, any>, D = any>(
    url: Routes,
    config?: AxiosRequestConfig<D> | undefined,
  ) => Promise<[null, R]> | Promise<[AxiosError, Parameters<Axios['get']>]>;
  post: <T = any, R = AxiosResponse<T, any>, D = any>(
    url: Routes,
    data?: any,
    config?: AxiosRequestConfig<D> | undefined,
  ) => Promise<[null, R]> | Promise<[AxiosError, Parameters<Axios['post']>]>;
  put: <T = any, R = AxiosResponse<T, any>, D = any>(
    url: Routes,
    data?: any,
    config?: AxiosRequestConfig<D> | undefined,
  ) => Promise<[null, R]> | Promise<[AxiosError, Parameters<Axios['put']>]>;
  delete: <T = any, R = AxiosResponse<T, any>, D = any>(
    url: Routes,
    config?: AxiosRequestConfig<D> | undefined,
  ) => Promise<[null, R]> | Promise<[AxiosError, Parameters<Axios['delete']>]>;
};

function createApi() {
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL as string,
  });

  return {
    ...axiosInstance,
    async get(...args) {
      try {
        const response = await axiosInstance.get(...args);
        return [null, response];
      } catch (err) {
        return [err, args];
      }
    },
    async post(...args) {
      try {
        const response = await axiosInstance.post(...args);
        return [null, response];
      } catch (err) {
        return [err, args];
      }
    },
    async put(...args) {
      try {
        const response = await axiosInstance.put(...args);
        return [null, response];
      } catch (err) {
        return [err, args];
      }
    },
    async delete(...args) {
      try {
        const response = await axiosInstance.delete(...args);
        return [null, response];
      } catch (err) {
        return [err, args];
      }
    },
  } as CustomInstance;
}
