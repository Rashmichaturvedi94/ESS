import { FormProps } from "../../hooks/useForm.interface";

export interface SubFormValues {
  title: string;
  description: string;
  price: number;
  course: number;
  subscriber: number;

}

export type SubscriptionFormProps = FormProps<SubFormValues>;
