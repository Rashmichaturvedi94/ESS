import { FormProps } from '../../hooks/useForm.interface';

export interface RegisterFormValues {
  name: string;
  username: string;
  email: string;
  password: string;
  password2: string;
  is_publisher?: boolean;
}

export type RegisterFormProps = FormProps<RegisterFormValues>;
