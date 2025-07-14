import { styled } from "styled-components"
import { colors } from "../../styles"

const baseStyle = `
  background-color: ${colors.accentPink};
  color: #fff;
  padding: 8px 8px;
  width: fit-content;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
`

export const TagText = styled.span`
  ${baseStyle}
`

export const TagLink = styled.a`
 ${baseStyle}

  &:hover {
    cursor: pointer;
    background-color: #d45757;
  }
`