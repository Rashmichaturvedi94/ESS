import { FormProps } from "../../hooks/useForm.interface";

export interface SubFormValues {
  title: string;
  description: string;
  price: number;
  course: number;
  subscriber: number;
  active: boolean;
}

export type SubscriptionFormProps = FormProps<SubFormValues>;
