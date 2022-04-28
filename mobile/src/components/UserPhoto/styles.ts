import { Image } from 'react-native';
import styled from 'styled-components/native';

import avatarImg from '../../assets/images/avatar.png';

const AVATAR_DEFAULT = Image.resolveAssetSource(avatarImg).uri;

type AvatarProps = {
  imageUri: string;
  avatarSize: number;
  containerSize: number;
};

export const Avatar = styled.Image.attrs(({ imageUri }: AvatarProps) => ({
  source: { uri: imageUri || AVATAR_DEFAULT },
}))<AvatarProps>`
  width: ${({ avatarSize }) => avatarSize}px;
  height: ${({ avatarSize }) => avatarSize}px;
  border-radius: ${({ avatarSize }) => avatarSize / 2}px;
`;
