import useDeepCompareEffect from 'use-deep-compare-effect';
import { FormikValues, useFormik } from 'formik';
import { FormConfig } from './useForm.interface';

export const useForm = <Values extends FormikValues>({
  errors = {},
  initialValues,
  ...props
}: FormConfig<Values>) => {
  const form = useFormik({
    validateOnBlur: false,
    validateOnChange: false,
    validateOnMount: false,
    initialValues: initialValues as Values,
    ...props,
  });

  useDeepCompareEffect(() => {
    if (errors) {
      form.setErrors(errors);
    }
  }, [errors]);

  return form;
};
