import { useMutation, useQuery } from 'react-query';
import jwt_decode from 'jwt-decode';
import {
  AccessError,
  AccessToken,
  ApiError,
  CourseParams,
  CourseResponce,
  CoursesResponse,
  LoginPayload,
  LoginResponse,
  QueryKeys,
  QueryParams,
  UsersParams,
  UsersResponse,
  UserPayload,
  Course,
  
} from './api.interface';
import { createMutationFn, createQueryFn } from './api';
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
          if (decoded) {
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

export const useCourses = () =>
    useQuery<CoursesResponse>({
      queryFn: createQueryFn({
        url: getEndpoint(QueryKeys.courses),
      }),
      queryKey: QueryKeys.courses,
    });

export const useUser = (params: UsersParams) =>
    useQuery<UsersResponse>({
      queryFn: createQueryFn({
        url: getEndpoint(QueryKeys.user),
      }),
      queryKey: [QueryKeys.user, params],
    });

export const useUpdateUserEmail = () =>
    useMutation<UserPayload, ApiError<UserPayload>, QueryParams<UsersParams>>(
      createMutationFn({
        url: getEndpoint(QueryKeys.user),
        method: 'PUT',
      }),
      {
        mutationKey: QueryKeys.user,
        onSuccess: () =>{},
      }
    );

export const usePostCourse = () =>
    useMutation<Course, ApiError<Course>, QueryParams<Course>>(
      createMutationFn({
        url: getEndpoint(QueryKeys.courses),
        method: 'POST',
        multipart: true,
      }),
      {
        mutationKey: QueryKeys.courses,
        onSuccess: () =>{}
      },
    );

export const useCourse = (params: CourseParams) =>
    useQuery<CourseResponce>({
      queryFn: createQueryFn({
        url: getEndpoint(QueryKeys.course),
      }),
      queryKey: [QueryKeys.course, params],
    });

  export const useCourseContents = () =>
  useQuery<CourseContentsResponse>({
    queryFn: createQueryFn({
      url: getEndpoint(QueryKeys.courseContents),
    }),
    queryKey: QueryKeys.courseContents,
  });
