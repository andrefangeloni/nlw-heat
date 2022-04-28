import React from 'react';

import { Header } from '../../components/Header';
import { MessageList } from '../../components/MessageList';

import * as S from './styles';

export const Home = () => (
  <S.Container>
    <Header />

    <MessageList />
  </S.Container>
);
