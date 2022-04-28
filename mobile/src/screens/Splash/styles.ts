import styled from 'styled-components/native';

import logo from '../../assets/images/splash.png';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #121214;
`;

export const LogoWrapper = styled.View`
  width: 100%;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'contain',
})`
  width: 100%;
  height: 100%;
`;
