import { FormProps } from '../../hooks/useForm.interface';

export interface ProfileFormValues {
  name: string;
  username: string;
  email: string;
  userId: number;
}

export type ProfileFormProps = FormProps<ProfileFormValues>;
