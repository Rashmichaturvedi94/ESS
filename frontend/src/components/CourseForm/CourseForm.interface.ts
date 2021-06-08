import { FormProps } from '../../hooks/useForm.interface';

export interface CourseFormValues {
  title: string;
  description: string;
  price: number;
  imgSrc: string;
  created_by: number;
  img?: File;
}

export type CourseFormProps = FormProps<CourseFormValues>;
