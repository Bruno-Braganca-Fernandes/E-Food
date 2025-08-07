import styled from "styled-components"
import { colors } from "../../styles"

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  inset: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalContainer = styled.div`
  background: ${colors.accentPink};
  color: ${colors.white};
  display: flex;
  padding: 32px;
  max-width: 1024px;
  position: relative;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`

export const DishImage = styled.img`
  max-width: 280px;
`

export const DishInfo = styled.div`
  margin-left: 24px;
  display: flex;
  flex-direction: column;
`

export const DishTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`

export const DishDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 24px;
`

export const DishPortion = styled.span`
  font-size: 14px;
  margin-bottom: 16px;
`

export const AddButton = styled.button`
  padding: 4px 8px;
  width: 40%;
  font-weight: bold;
  font-size: 14px;
  background-color: ${colors.softPink};
  color: ${colors.accentPink};
  border: none;
  cursor: pointer;
`