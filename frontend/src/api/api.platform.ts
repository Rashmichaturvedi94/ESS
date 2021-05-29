import { paths } from '../const/paths';
import { Storage } from './api.interface';

export const getBaseUrl = () => process.env.REACT_APP_API_URL;

export const logout = () => {
  if (window.location.pathname !== paths.login) {
    window.location.href = paths.login;
  }
};

export const getStorage: () => Storage<string> = () => ({
  setItem: (key, value) =>
    new Promise((resolve) => {
      localStorage.setItem(key, value);
      resolve();
    }),
  getItem: (key: string) => Promise.resolve(localStorage.getItem(key)),
  removeItem: (key: string) =>
    new Promise((resolve) => {
      localStorage.removeItem(key);
      resolve();
    }),
});
