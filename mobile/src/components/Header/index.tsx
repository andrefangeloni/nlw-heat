import React from 'react';

import LogoSvg from '../../assets/images/logo.svg';

import { UserPhoto } from '../UserPhoto';

import * as S from './styles';

export const Header = () => (
  <S.Container>
    <LogoSvg />

    <UserPhoto imageUri="https://github.com/andrefangeloni.png" />

    <S.LogoutButton>
      <S.Logout>Sair</S.Logout>
    </S.LogoutButton>
  </S.Container>
);
