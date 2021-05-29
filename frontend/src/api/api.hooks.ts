import { useMutation } from 'react-query';
import jwt_decode from 'jwt-decode';
import {
  AccessError,
  AccessToken,
  ApiError,
  LoginPayload,
  LoginResponse,
  QueryKeys,
  QueryParams,
} from './api.interface';
import { createMutationFn } from './api';
import { getEndpoint } from './api.endpoints';
import { setToken } from './api.helpers';

export const useLogin = () =>
  useMutation<LoginResponse, ApiError<LoginPayload>, QueryParams<LoginPayload>>(
    createMutationFn({
      url: getEndpoint(QueryKeys.login),
      method: 'POST',
    }),
    {
      mutationKey: QueryKeys.login,
      onSuccess: ({ access, refresh }) =>
        new Promise<LoginResponse>((resolve, reject) => {
          const decoded = jwt_decode<AccessToken>(access);
          if (decoded.is_staff) {
            resolve({ access, refresh });
          } else {
            const message = 
              'Username and password is not associated to any account.';
            const error: AccessError = {
              name: 'AccessError',
              message,
              response: {
                data: {
                  detail: message,
                },
              },
            };
            reject(error);
          }
        }).then(setToken),
    },
  );
