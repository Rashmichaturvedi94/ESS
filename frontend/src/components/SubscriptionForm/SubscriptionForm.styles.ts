import styled from "styled-components";
import { InputLabel } from "@material-ui/core";

export const PriceContainer = styled.div`
  margin-top: 50px;
  flex: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ButtonContainer = styled.div`
  margin-top: 10px;
  flex: 2;
  display: flex;
  flex-direction: row;
  justify-content: left;
`;

export const TitleLabel = styled(InputLabel)` 
  font-size: x-large;
  font-weight: bold;
  margin-top: 50px;
`;
export const DescLabel = styled(InputLabel)` 
  font-size: medium;
`;

export const PaymentSelector = styled(InputLabel)` 
  font-size: medium;
  margin-top: 40px;
`;