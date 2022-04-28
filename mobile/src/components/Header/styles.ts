import styled from 'styled-components/native';

import { COLORS, FONTS } from '../../theme';

export const Container = styled.View`
  width: 100%;
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LogoutButton = styled.TouchableOpacity``;

export const Logout = styled.Text`
  font-size: 15px;
  font-family: ${FONTS.REGULAR};
  color: ${COLORS.WHITE};
`;
