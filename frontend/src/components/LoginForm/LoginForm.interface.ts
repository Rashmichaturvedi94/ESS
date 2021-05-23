import { FormProps } from '../../hooks/useForm.interface';

export interface LoginFormValues {
  username: string;
  password: string;
}

export type LoginFormProps = FormProps<LoginFormValues>;
