import React, { FC } from "react";
import { Box, Button, FormHelperText } from "@material-ui/core";

import {
  SubFormValues,
  SubscriptionFormProps,
} from "./SubscriptionForm.interface";
import {
  TitleLabel,
  DescLabel,
  PriceContainer,
  PaymentSelector,
  ButtonContainer,
} from "./SubscriptionForm.styles";
import { useForm } from "../../hooks/useForm";

const initialValues: SubFormValues = {
  title: "",
  description: "",
  price: "",
  method: "",
};

export const SubscriptionForm: FC<SubscriptionFormProps> = (props) => {
  const { errors, handleSubmit } = useForm({
    initialValues,
    ...props,
  });

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" gridRowGap={20}>
        {errors?.detail && (
          <FormHelperText error>{errors?.detail}</FormHelperText>
        )}

        <TitleLabel>Course Title</TitleLabel>
        <DescLabel>This is small course details for the payment page</DescLabel>
        <PriceContainer>
          {/* <PaymentIcon
            id="visa"
            style={{ margin: 5, width: 50 }}
            className="payment-icon"
          /> */}
          <DescLabel>Price</DescLabel>

          <DescLabel>$29.99</DescLabel>
        </PriceContainer>
        <PaymentSelector>Choose Payment method</PaymentSelector>
        <ButtonContainer>
          <Button type="submit" variant="contained" style={{ background: "grey", marginLeft: 10 }}>
            Pay by Card
          </Button>
          <Button
            type="submit"
            variant="contained"
            style={{ background: "grey", marginLeft: 50 }}
          >
            Pay by Blik
          </Button>
        </ButtonContainer>
      </Box>
    </form>
  );
};
