import React from 'react';

import { UserPhoto } from '../UserPhoto';

import * as S from './styles';

export type MessageProps = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  };
};

type Props = {
  data: MessageProps;
};

export const Message = ({ data }: Props) => (
  <S.Container>
    <S.MessageText>{data.text}</S.MessageText>

    <S.Footer>
      <UserPhoto imageUri={data.user.avatar_url} sizes="SMALL" />

      <S.UserName>{data.user.name}</S.UserName>
    </S.Footer>
  </S.Container>
);
