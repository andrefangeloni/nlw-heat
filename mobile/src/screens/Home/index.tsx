import React from 'react';

import { Header } from '../../components/Header';
import { SignInBox } from '../../components/SignInBox';
import { MessageList } from '../../components/MessageList';

import * as S from './styles';

export const Home = () => (
  <S.Container>
    <Header />

    <MessageList />

    <SignInBox />
  </S.Container>
);
