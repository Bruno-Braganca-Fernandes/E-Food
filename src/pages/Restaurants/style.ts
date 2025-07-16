import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  background-color: ${colors.backgroundPink};
  padding: 80px 0px;
`

export const Grid = styled.div`
  display: grid;
  gap: 80px;
  grid-template-columns: repeat(auto-fit, minmax(472px, 1fr));
  max-width: 1024px;
  margin: 0 auto;
`
