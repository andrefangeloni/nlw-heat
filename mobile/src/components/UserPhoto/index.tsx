import React from 'react';

import * as S from './styles';

const SIZES = {
  SMALL: {
    avatarSize: 28,
    containerSize: 32,
  },
  NORMAL: {
    avatarSize: 42,
    containerSize: 48,
  },
};

type Props = {
  imageUri: string;
  sizes?: 'SMALL' | 'NORMAL';
};

export const UserPhoto = ({ imageUri, sizes = 'NORMAL' }: Props) => {
  const { avatarSize, containerSize } = SIZES[sizes];

  return (
    <S.AvatarWrapper containerSize={containerSize}>
      <S.Avatar imageUri={imageUri} avatarSize={avatarSize} />
    </S.AvatarWrapper>
  );
};
