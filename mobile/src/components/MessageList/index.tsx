import React from 'react';

import { Message } from '../Message';

import * as S from './styles';

const message = {
  id: '1',
  text: 'mensagem de teste',
  user: {
    name: 'André Angeloni',
    avatar_url: 'https://github.com/andrefangeloni.png',
  },
};

export const MessageList = () => (
  <S.Container>
    <Message data={message} />
    <Message data={message} />
    <Message data={message} />
  </S.Container>
);
