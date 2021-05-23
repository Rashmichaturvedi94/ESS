export type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

export type Uri = string;

export type DateString = string;

export type LocalOrRemoteFile = File | Uri;

export type Modify<T, R> = Omit<T, keyof R> & R;
