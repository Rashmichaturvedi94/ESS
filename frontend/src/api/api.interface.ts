import { AxiosError, AxiosRequestConfig } from "axios";
import { JwtPayload } from "jwt-decode";

export interface Storage<T> {
  setItem: (key: string, value: T) => Promise<void | { error?: any }>;
  getItem: (key: string) => Promise<T | null | { error?: any }>;
  removeItem: (key: string) => Promise<void | { error?: any }>;
}

export type Uri = string;

export type DateString = string;

export enum QueryKeys {
  login = "login",
  refreshToken = "refreshToken",
  register = "register",
  courses = "courses",
  user = "user",
  userMe = "userMe",
  course = "course",
  courseContents = "courseContents",
  subscriptions = "subscriptions",
}

export interface RequestConfig extends AxiosRequestConfig {
  multipart?: boolean;
  url: string;
}

export type Endpoints = Record<QueryKeys, string>;

export type ApiError<T extends object = {}> = AxiosError<
  Partial<Record<keyof T | "detail", string>>
>;

export interface QueryParams<
  T extends Record<string, any> = Record<string, any>,
  P extends Record<string, any> = Record<string, any>
> {
  data: T;
  params?: P;
}

export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginResponse {
  access: string;
  refresh: string;
}

export interface AccessToken extends JwtPayload {
  user_id: number;
  is_staff: boolean;
  username: string;
}

export interface AccessError extends Error {
  response: {
    data: {
      detail: string;
    };
  };
}

export interface RefreshTokenPayload {
  refresh: string;
}

export interface RefreshTokenResponse {
  access: string;
}

export interface Course {
  id?: number;
  title: string;
  description: string;
  duration?: number;
  price: number;
  created_by: number;
  img?: File;
  contents?: CourseContents[];
}

export interface CourseContents {
  id?: number;
  title: string;
  description: string;
  course: number;
  position?: number;
  img?: File;
  url?: string;
  created_by: number;
}

export type CoursesResponse = Course[];

export interface UsersParams {
  userId: number;
  userEmail?: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  is_publisher: boolean;
}

export type UsersResponse = User;

export interface RegisterPayload {
  username: string;
  password: string;
  password2: string;
  email?: string;
  name: string;
  is_publisher?: boolean;
}

export type RegisterResponse = User;

export interface UserPayload {
  username: string;
  email: string;
  groups: string[];
}

export interface Subscription {
  id: number;
  price: number;
  subscriber: number;
  course: Course;
}

export type SubscriptionsResponse = Subscription[];
export interface CourseParams {
  courseId?: string;
}

export interface ContentParams {
  contentId?: string;
}

export type CourseResponce = Course;

export type ContentResponce = CourseContents;

export type CourseContentsResponse = CourseContents[];

export interface CourseContentParams {
  courseId?: string;
}
export interface SubscriptionPayload {
  id?: number;
  price: number;
  subscriber: number;
  course: number;
  active: boolean;
}
