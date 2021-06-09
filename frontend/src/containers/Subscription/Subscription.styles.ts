import { Button, InputLabel, Typography } from "@material-ui/core";
import styled from "styled-components";

export const SubContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

export const AuthorText = styled(Typography)``;

export const CourseText = styled(Typography)`
  font-size: 40px;
  font-weight: 700;
`;

export const DetailText = styled(Typography)`
  font-size: 25px;
  font-weight: 100;
  margin-left: 50px;
`;

export const ButtonText = styled(Button)`
  font-size: 30px;
  font-weight: 100;
`;

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

export const TitleLabel = styled(Typography)`
  font-size: x-large;
  font-weight: bold;
  margin-top: 50px;
`;
export const DescLabel = styled(InputLabel)`
  font-size: medium;
`;
export const PriceLabel = styled(InputLabel)`
  font-size: medium;
  margin-top: 10px;
`;

export const PaymentSelector = styled(InputLabel)`
  font-size: medium;
  margin-top: 40px;
`;
