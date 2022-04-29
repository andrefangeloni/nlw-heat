import React from 'react';

import { Button } from '../Button';

import { COLORS } from '../../theme';

import * as S from './styles';

export const SendMessageForm = () => {
  const [message, setMessage] = React.useState('');
  const [sendingMessage, setSendingMessage] = React.useState(false);

  return (
    <S.Container>
      <S.Input
        value={message}
        onChangeText={setMessage}
        editable={!sendingMessage}
      />

      <Button
        title="enviar mensagem"
        color={COLORS.WHITE}
        backgroundColor={COLORS.PINK}
      />
    </S.Container>
  );
};
