import React from 'react';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import * as S from './styles';

export const SignInBox = () => (
  <S.Container>
    <Button
      icon="github"
      title="entrar com o github"
      color={COLORS.BLACK_PRIMARY}
      backgroundColor={COLORS.YELLOW}
    />
  </S.Container>
);
