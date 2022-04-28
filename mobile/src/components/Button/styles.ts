import styled from 'styled-components/native';

import { FONTS } from '../../theme';

type ContainerProps = {
  disabled: boolean;
  backgroundColor: string;
};

type ButtonProps = {
  color: string;
};

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<ContainerProps>`
  width: 100%;
  height: 48px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const ButtonText = styled.Text<ButtonProps>`
  font-family: ${FONTS.BOLD};
  color: ${({ color }) => color};
`;

export const Loading = styled.ActivityIndicator<ButtonProps>`
  color: ${({ color }) => color};
`;
