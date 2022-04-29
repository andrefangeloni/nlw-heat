import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { COLORS } from '../../theme';

export const Container = styled.View`
  width: 100%;
  height: 184px;
  padding: 16px 24px ${getBottomSpace() + 16}px;
  background-color: ${COLORS.BLACK_TERTIARY};
`;

export const Input = styled.TextInput.attrs({
  multiline: true,
  maxLength: 140,
  placeholder: 'Qual a sua expectativa para o evento?',
  placeholderTextColor: COLORS.GRAY_PRIMARY,
})`
  width: 100%;
  height: 88px;
  color: ${COLORS.WHITE};
`;
