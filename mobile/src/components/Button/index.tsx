import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import * as S from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  color: string;
  isLoading: boolean;
  backgroundColor: string;
  icon?: React.ComponentProps<typeof AntDesign>['name'];
};

export const Button = ({
  icon,
  title,
  color,
  backgroundColor,
  isLoading = false,
}: Props) => (
  <S.Container backgroundColor={backgroundColor} disabled={isLoading}>
    {isLoading ? (
      <S.Loading color={color} />
    ) : (
      <>
        <AntDesign name={icon} size={24} style={{ marginRight: 16 }} />
        <S.ButtonText color={color}>{title}</S.ButtonText>
      </>
    )}
  </S.Container>
);
