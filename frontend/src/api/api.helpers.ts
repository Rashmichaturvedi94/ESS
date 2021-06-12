import { AxiosRequestConfig } from 'axios';
import jwt_decode from 'jwt-decode';
import { AccessToken, RequestConfig } from './api.interface';
import { getStorage } from './api.platform';


enum StorageKeys {
  ACCESS_TOKEN = 'access_token',
  REFRESH_TOKEN = 'refresh_token',
  IS_PUBLISHER = 'is_publisher',
}

export const setAccessToken = async (accessToken?: string) => {
  if (accessToken) {
    await getStorage().setItem(StorageKeys.ACCESS_TOKEN, accessToken);
  }
};

export const setRefreshToken = async (refreshToken?: string) => {
  if (refreshToken) {
    await getStorage().setItem(StorageKeys.REFRESH_TOKEN, refreshToken);
  }
};

export const setToken = async (data?: { access: string; refresh: string }) => {
  await setAccessToken(data?.access);
  await setRefreshToken(data?.refresh);
};

export const getAccessToken = () =>
  getStorage().getItem(StorageKeys.ACCESS_TOKEN);

export const getRefreshToken = () =>
  getStorage().getItem(StorageKeys.REFRESH_TOKEN);

export const getUserIdFromLocalStorage = () => {
  if (!window.localStorage.getItem(StorageKeys.ACCESS_TOKEN)){
    return 0;
  }
  const decoded = jwt_decode<AccessToken>(window.localStorage.getItem(StorageKeys.ACCESS_TOKEN) as string);
  return decoded.user_id;
};

export const removeAccessToken = () =>
  getStorage().removeItem(StorageKeys.ACCESS_TOKEN);

export const removeRefreshToken = () =>
  getStorage().removeItem(StorageKeys.REFRESH_TOKEN);

export const removeToken = async () => {
  await removeAccessToken();
  await removeRefreshToken();
};

export const getIsAuthenticated = async () => {
  const token = await getAccessToken();
  return !!token;
};

export const getIsPublisherLocalStorage = () => {
  if (!window.localStorage.getItem(StorageKeys.ACCESS_TOKEN)){
    return 0;
  }
  const decoded = jwt_decode<AccessToken>(window.localStorage.getItem(StorageKeys.ACCESS_TOKEN) as string);
  return decoded.is_publisher;
};

export const getUrlWithParams = <T extends object>(
  url: string,
  params: T = {} as T,
) =>
  Object.entries(params).reduce(
    (newUrl, [key, value]) => newUrl.replace(`:${key}`, `${value}`),
    url,
  );

export const buildConfig = (
  { url, params: queryParams, ...config }: RequestConfig,
  data: any,
  pathParams?: Record<string, any>,
): AxiosRequestConfig => ({
  headers: {},
  ...config,
  data,
  params:
    queryParams &&
    Object.entries(queryParams).reduce((acc, [key, param]) => {
      if (Array.isArray(param)) {
        acc[key] = param.join();
      } else {
        acc[key] = param;
      }
      return acc;
    }, {} as RequestConfig['params']),
  url: getUrlWithParams(url, pathParams),
});
