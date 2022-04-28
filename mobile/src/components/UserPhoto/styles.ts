import { Image } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import avatarImg from '../../assets/images/avatar.png';

import { COLORS } from '../../theme';

const AVATAR_DEFAULT = Image.resolveAssetSource(avatarImg).uri;

type AvatarProps = {
  imageUri: string;
  avatarSize: number;
};

type AvatarWrapperProps = {
  containerSize: number;
};

export const AvatarWrapper = styled(LinearGradient).attrs({
  colors: [COLORS.PINK, COLORS.YELLOW],
  start: { x: 0, y: 0.8 },
  end: { x: 0.9, y: 1 },
})<AvatarWrapperProps>`
  align-items: center;
  justify-content: center;
  width: ${({ containerSize }) => containerSize}px;
  height: ${({ containerSize }) => containerSize}px;
  border-radius: ${({ containerSize }) => containerSize / 2}px;
`;

export const Avatar = styled.Image.attrs(({ imageUri }: AvatarProps) => ({
  source: { uri: imageUri || AVATAR_DEFAULT },
}))<AvatarProps>`
  border-width: 2px;
  border-color: ${COLORS.BLACK_SECONDARY};
  width: ${({ avatarSize }) => avatarSize}px;
  height: ${({ avatarSize }) => avatarSize}px;
  border-radius: ${({ avatarSize }) => avatarSize / 2}px;
`;
