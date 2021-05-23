import {
  MutationFunction,
  QueryClient,
  QueryFunctionContext,
} from 'react-query';
import axiosFactory, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import {
  buildConfig,
  getAccessToken,
  getRefreshToken,
  removeToken,
  setAccessToken,
} from './api.helpers';
import {
  QueryParams,
  RefreshTokenPayload,
  RefreshTokenResponse,
  RequestConfig,
} from './api.interface';
import { endpoints } from './api.endpoints';
import { getBaseUrl, logout } from './api.platform';

const axios = axiosFactory.create({
  baseURL: getBaseUrl(),
});

axios.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const accessToken = await getAccessToken();

  if (accessToken) {
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`,
      },
    };
  }

  return config;
});

axios.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config;

    const refreshToken = await getRefreshToken();

    // Invalid refresh token
    if (
      !refreshToken ||
      (error.response?.status === 401 &&
        // NOTE: check user access endpoints to make sure we do not end up in a refresh loop
        [endpoints.refreshToken, endpoints.login, endpoints.register].some(
          (endpoint) => endpoint === originalRequest.url,
        ))
    ) {
      await removeToken();
      logout();
      return Promise.reject(error);
    }

    // Token expired, try refreshing it
    if (error.response?.status === 401 && typeof refreshToken === 'string') {
      const data: RefreshTokenPayload = {
        refresh: refreshToken,
      };

      const response = await axios.post<RefreshTokenResponse>(
        endpoints.refreshToken,
        data,
      );

      // Token refreshed successfully
      if (response.status === 200) {
        await setAccessToken(response.data.access);
        return axios(originalRequest);
      }
    }

    return Promise.reject(error);
  },
);

export const queryClient = new QueryClient();

export const createQueryFn = <ResponseData>(config: RequestConfig) => async ({
  queryKey,
}: QueryFunctionContext<object[]>): Promise<ResponseData> => {
  // queryKey is used to build out a hash value to identify cached api data (react-query),
  // it is also used to pull out the path params (from arbitrary position at index 1) to build out the url - such as e.g. api/foo/${pathParam}/bar
  // it is a temp. solution which may require refactoring
  // refactoring would require many changes in api.hooks and possibly other files

  const pathParams = typeof queryKey === 'string' ? {} : queryKey[1];

  const enhancedConfig = buildConfig(config, undefined, pathParams);

  const response = await axios.request<ResponseData>(enhancedConfig);
  return response.data;
};

export const createMutationFn = <RequestData, ResponseData>({
  multipart,
  ...config
}: RequestConfig): MutationFunction<
  ResponseData,
  QueryParams<RequestData>
> => async ({ data, params }) => {
  const enhancedConfig = buildConfig(config, data, params);

  if (multipart) {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value === undefined || value === null) return;
      if (Array.isArray(value)) {
        if (value.length) value.forEach((val) => formData.append(key, val));
      } else {
        formData.append(key, value);
      }
    });

    enhancedConfig.headers['Content-Type'] = 'multipart/form-data';
    enhancedConfig.data = formData;
  }

  const response = await axios.request<ResponseData>(enhancedConfig);
  return response.data;
};
