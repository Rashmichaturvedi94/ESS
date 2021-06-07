import { FormProps } from "../../hooks/useForm.interface";

export interface SubFormValues {
  title: string;
  description: string;
  price: string;
  method: string;
}

export type SubscriptionFormProps = FormProps<SubFormValues>;
