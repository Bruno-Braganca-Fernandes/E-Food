import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.white};
  border: 1px solid ${colors.accentPink};
  overflow: hidden;
  width: 480px;
  display: flex;
  flex-direction: column;
`
export const ImageContainer = styled.div`
  position: relative;
`

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
`

export const TagList = styled.div`
  position: absolute;
  top: 8px;
  right: 16px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 8px;
`

export const Info = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  color: ${colors.accentPink};
`

export const Description = styled.p`
  font-size: 14px;
  margin: 0;
`

export const Rating = styled.span`
  font-weight: bold;
  font-size: 22px;
`