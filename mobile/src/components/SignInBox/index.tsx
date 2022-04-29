import React from 'react';

import { Button } from '../Button';

import { useAuth } from '../../hooks/useAuth';

import { COLORS } from '../../theme';

import * as S from './styles';

export const SignInBox = () => {
  const { signIn } = useAuth();

  return (
    <S.Container>
      <Button
        icon="github"
        onPress={() => signIn()}
        title="entrar com o github"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
      />
    </S.Container>
  );
};
