import { AxiosError, AxiosRequestConfig } from 'axios';
import { JwtPayload } from 'jwt-decode';

export interface Storage<T> {
  setItem: (key: string, value: T) => Promise<void | { error?: any }>;
  getItem: (key: string) => Promise<T | null | { error?: any }>;
  removeItem: (key: string) => Promise<void | { error?: any }>;
}

export type Uri = string;

export type DateString = string;

export enum QueryKeys {
  login = 'login',
  refreshToken = 'refreshToken',
  register = 'register',
  courses = 'courses',
}

export interface RequestConfig extends AxiosRequestConfig {
  multipart?: boolean;
  url: string;
}

export type Endpoints = Record<QueryKeys, string>;

export type ApiError<T extends object = {}> = AxiosError<
  Partial<Record<keyof T | 'detail', string>>
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
  is_creator: boolean;
  username: string;
  display_name: string;
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
  id: number;
  title: string;
  description: string;
  price: number;
  created_by: number;
}

export type CoursesResponse = Course[];
