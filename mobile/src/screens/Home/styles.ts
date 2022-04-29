import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { COLORS } from '../../theme';

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: 'padding',
  enabled: Platform.OS === 'ios',
})`
  flex: 1;
  background-color: ${COLORS.BLACK_SECONDARY};
  padding-top: ${getStatusBarHeight() + 20}px;
`;
