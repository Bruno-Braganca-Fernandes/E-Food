import styled from 'styled-components'
import { colors } from '../../styles'

export const Grid = styled.div`
  padding-top: 80px;
  display: grid;
  gap: 80px;
  grid-template-columns: repeat(auto-fit, minmax(472px, 1fr));
`
