import styled from "styled-components";
import { colors } from "../../styles";

export const FooterStyle = styled.footer`
background-color: ${colors.softPink};
height: 300px;
text-align: center;
margin-top: 120px;
padding: 40px 0 0 0;
`

export const ImageContainer = styled.div`
display: flex;
justify-content: center;
gap: 8px;
margin-top: 32px;
cursor: pointer;
`

export const FooterText = styled.p`
margin-top: 80px;
font-size: 10px;
`