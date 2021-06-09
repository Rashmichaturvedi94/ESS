import { Endpoints, QueryKeys } from './api.interface';

/*
  Note: Until it gets fixed on the backend, token related endpoint
  must end with trailing slash and other endpoint mustn't
*/
export const endpoints: Endpoints = {
  login: 'token/',
  refreshToken: 'token/refresh/',
  register: 'register/',
  courses: 'courses/',
  user: 'users/:userId/',
  course: 'courses/:courseId/',
  courseContents: 'courseContents/',
  courseContent: 'courseContents/:courseId',
  subscriptions: 'subscriptions/',
};



export const getEndpoint = (key: QueryKeys) => endpoints[key];
