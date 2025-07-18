import styled, { createGlobalStyle } from "styled-components";

export const colors = {
  softPink: '#FFEBD9',
  backgroundPink: '#FFF8F2',
  accentPink: '#E66767',
  white: '#FFFFFF'
}

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
}

body{
  background-color: ${colors.backgroundPink};
  color: ${colors.accentPink};
}
`
export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  `