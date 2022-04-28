import React from 'react';

import LogoSvg from '../../assets/images/logo.svg';

import { UserPhoto } from '../UserPhoto';

import * as S from './styles';

export const Header = () => (
  <S.Container>
    <LogoSvg />

    <S.Wrapper>
      <S.LogoutButton>
        <S.Logout>Sair</S.Logout>
      </S.LogoutButton>

      <UserPhoto imageUri="https://github.com/andrefangeloni.png" />
    </S.Wrapper>
  </S.Container>
);
