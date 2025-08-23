import styled from "styled-components";
import { colors } from "../../styles";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;

export const CartContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  max-width: 100%;
  height: 100%;
  background-color: ${colors.accentPink};
  transform: translateX(${(props) => (props.isOpen ? "0" : "100%")});
  transition: 0.3s ease-in-out;
  z-index: 999;
  padding: 20px;
`;

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const CartItems = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const DishItem = styled.div`
  display: flex;
  background-color: ${colors.softPink};
  padding: 8px;
`;

export const DishImage = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 8px;
`;

export const DishDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DishName = styled.h3`
  margin-bottom: 16px;
  font-size: 18px;
  color: ${colors.accentPink};
`;

export const DishPrice = styled.p`
  font-size: 14px;
  color: ${colors.accentPink}; 
`;

export const TotalValue = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  padding: 16px 8px;
  color: ${colors.white};
  font-weight: 700;
  font-size: 14px;
  position: fixed;
  bottom: 80px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export const ContinueButton = styled.button`
  width: 95%;
  padding: 4px;
  background-color: ${colors.softPink};
  color: ${colors.accentPink};
  border: none;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  position: fixed;
  bottom: 20px;
  left: 0;
  right: 0;
  margin: 0 auto;
  &:hover {
    background-color: #f8dede;
  }
`;