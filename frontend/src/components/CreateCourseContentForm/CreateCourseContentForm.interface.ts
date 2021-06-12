import { FormProps } from '../../hooks/useForm.interface';

export interface CreateCourseContentFormValues {
  title: string;
  description: string;
  imgSrc: string;
  url: string;
  course: number;
  created_by: number;
  img?: File;
}

export type CreateCourseContentFormProps = FormProps<CreateCourseContentFormValues>;
