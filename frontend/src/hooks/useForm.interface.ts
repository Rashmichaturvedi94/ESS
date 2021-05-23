import { FormikConfig, FormikErrors, FormikValues } from 'formik';
import { Nullable } from '../types/utils';

export interface FormConfig<
  Values extends FormikValues,
  ExtendedValues = Values & { detail?: string }
> extends Omit<FormikConfig<ExtendedValues>, 'initialValues'> {
  errors?: FormikErrors<ExtendedValues> | null;
  initialValues: Nullable<Values>;
}
export interface FormProps<Values>
  extends Omit<FormConfig<Values>, 'initialValues'> {
  initialValues?: Nullable<Values>;
  isLoading?: boolean;
}
