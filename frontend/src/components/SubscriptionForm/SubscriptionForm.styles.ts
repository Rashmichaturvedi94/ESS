import styled from "styled-components";
import { InputLabel, Typography } from "@material-ui/core";

export const PriceContainer = styled.div`
  margin-top: 50px;
  flex: 2;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const ButtonContainer = styled.div`
  margin-top: 10px;
  flex: 2;
  display: flex;
  flex-direction: row;
  justify-content: left;
  font-size: 40px;
`;

export const TitleLabel = styled(Typography)`
  font-size: 40px;
  font-weight: 700;
  margin-top: 50px;
`;
export const DescLabel = styled(InputLabel)`
  font-size: 25px;
`;

export const PaymentSelector = styled(InputLabel)`
  font-size: 40px;
  margin-top: 40px;
`;

export const PriceLabel = styled(InputLabel)`
  font-size: 25px;
  margin-top: 10px;
  margin-left: 20px;
`;
