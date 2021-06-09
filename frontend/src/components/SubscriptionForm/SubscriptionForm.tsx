import React, { FC } from "react";
import { Box, Button, FormHelperText } from "@material-ui/core";
import CreditCardIcon from "@material-ui/icons/CreditCard";

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
  PriceLabel,
} from "./SubscriptionForm.styles";
import { useForm } from "../../hooks/useForm";

const initialValues: SubFormValues = {
  title: "test",
  description: "test",
  price: 0,
  course: 0,
  subscriber: 0,
  active: false,
};

export const SubscriptionForm: FC<SubscriptionFormProps> = (props) => {
  const { errors, values, handleSubmit } = useForm({
    initialValues,
    ...props,
  });

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" gridRowGap={20}>
        {errors?.detail && (
          <FormHelperText error>{errors?.detail}</FormHelperText>
        )}

        <TitleLabel>{values.title}</TitleLabel>
        <DescLabel>{values.description}</DescLabel>
        <PriceContainer>
          <CreditCardIcon style={{ fontSize: 40 }} />
          <PriceLabel>Price:</PriceLabel>
          <PriceLabel>${values.price}</PriceLabel>
        </PriceContainer>
        <PaymentSelector>Choose Payment method</PaymentSelector>
        <ButtonContainer>
          <Button
            type="submit"
            variant="contained"
            style={{ background: "grey", marginLeft: 10 }}
          >
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
