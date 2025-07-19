import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.accentPink};
  padding: 8px;
  width: 320px;
`

export const Image = styled.img`
  width: 100%;
  border-radius: 4px;
`

export const Name = styled.h3`
  color: ${colors.softPink};
  font-weight: 900;
  font-size: 16px;
  padding: 8px 0;
`

export const Description = styled.p`
  color: ${colors.softPink};
  font-size: 14px;
  line-height: 22px;
`

export const Button = styled.button`
  margin-top: 8px;
  background-color: ${colors.softPink};
  color: ${colors.accentPink};
  font-weight: bold;
  font-size: 14px;
  border: none;
  padding: 4px;
  width: 100%;
  cursor: pointer;
`
