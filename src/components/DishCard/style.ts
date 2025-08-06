import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.accentPink};
  padding: 8px;
  width: 320px;
   display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export const Image = styled.img`
  width: 100%;
   height: 200px;
  object-fit: cover;
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
   transition: background-color 0.3s;

  &:hover {
    background-color: #f8dede;
  }
`
