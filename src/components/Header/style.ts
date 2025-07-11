import styled from "styled-components";
import backgrounHeader from "../../assets/images/fundo.png"
import { colors } from "../../styles";

export const HeaderStyle = styled.header`
    background-image: url(${backgrounHeader});
    height: 400px;
    background-size: cover;
    text-align: center;
    padding: 40px 0;
`

export const HeaderText = styled.h1`
    margin-top: 176px;
    color: ${colors.accentPink};
    font-size: 36px;
    font-weight: bold;
`;