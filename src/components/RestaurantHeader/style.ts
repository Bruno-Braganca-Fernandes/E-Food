import styled from "styled-components";
import { colors } from "../../styles";
import { Link } from 'react-router-dom';

import backgrounHeader from "../../assets/images/fundo.png"

export const Background = styled.div`
    background-image: url(${backgrounHeader});
  width: 100%;
  height: 184px;
  /* padding-left: 60px; */
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  color: ${colors.accentPink};
  text-decoration: none; 
  
  &:hover {
    text-decoration: underline;
  }
`;


export const BackgroundText = styled.h3`
  font-size: 18px;
  font-weight: 900;
`;

export const Banner = styled.div`
  position: relative; 
  width: 100%;
  height: 280px;
  color: ${colors.white};
  background-repeat: no-repeat;
  background-size: cover;


  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const TextBanner = styled.p`
  padding-top: 25px;
  font-size: 32px;
  font-weight: 100;
  padding-bottom: 152px;
  position: relative;
  z-index: 1;
`;

export const RestaurantName = styled.p`
  font-size: 32px;
  font-weight: 900;
  position: relative;
  z-index: 1;
`;
