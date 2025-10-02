import styled from 'styled-components';
import InputMask from "@mona-health/react-input-mask";

import { colors } from '../../styles';

export const SidebarContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  max-width: 100%;
  height: 100%;
  background-color: ${colors.accentPink};
  transform: translateX(${(props) => (props.isOpen ? '0' : '100%')});
  transition: 0.3s ease-in-out;
  z-index: 999;
  padding: 32px 8px;
  color: ${colors.softPink}; 
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const FormGroup = styled.div`
  margin-bottom: 8px;

  label {
    font-size: 14px;
    font-weight: bold;
    display: block;
    margin-bottom: 8px;
  }
`;

export const Input = styled.input`
  background-color: ${colors.softPink};
  border: 2px solid ${colors.softPink};
  height: 32px;
  padding: 0 8px;
  font-size: 14px;
  width: 100%;

  &.error {
    border-color: red;
  }
`;

export const MaskedInput = styled(InputMask)`
 background-color: ${colors.softPink};
  border: 2px solid ${colors.softPink};
  height: 32px;
  padding: 0 8px;
  font-size: 14px;
  width: 100%;

  &.error {
    border-color: red;
  }
`

export const Button = styled.button`
  width: 100%;
  padding: 8px;
  margin-top: 8px;
  background-color: ${colors.softPink};
  color: ${colors.accentPink};
  border: none;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #f8dede;
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`;

export const ConfirmationText = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 24px;
`;