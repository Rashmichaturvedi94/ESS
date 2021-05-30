import { FormProps } from '../../hooks/useForm.interface';

export interface RegisterFormValues {
  name: string;
  username: string;
  password: string;
  password2: string;
}

export type RegisterFormProps = FormProps<RegisterFormValues>;
