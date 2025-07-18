import styled from "styled-components";
import { colors } from "../../styles";

import backgrounHeader from "../../assets/images/fundo.png"
import italianRestaurantBanner from "../../assets/images/italianRestaurantBanner.png";

export const Background = styled.div`
    background-image: url(${backgrounHeader});
  width: 100%;
  height: 184px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const BackgroundText = styled.h3`
  font-size: 18px;
  font-weight: 900;
`;

export const Banner = styled.div`
  width: 100%;
  height: 280px;
  color: ${colors.white};
  background-image: url(${italianRestaurantBanner});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const TextBanner = styled.p`
  padding-top: 25px;
  font-size: 32px;
  font-weight: 100;
  padding-bottom: 152px;
`;

export const RestaurantName = styled.p`
  font-size: 32px;
  font-weight: 900;
  width: 672px;
`;
