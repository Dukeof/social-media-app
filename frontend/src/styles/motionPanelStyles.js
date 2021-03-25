import styled from 'styled-components'

import { Title } from './titles';
// import { Icon } from './styledIcon';
// import { Button } from './styledButtons';
import { theme } from './globalStyle';

import backgroundImage from '../assets/background_image.png';

export const MainContainer = styled.div`
    width: 100%;
    height: 97.5vh;
    background-image: ${theme.LinearGradient}, url(${backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Motion = styled(Title)`
    color: rgba(255,255,255,0.98);
    font-size: 28px;
    font-weight: 400;
    letter-spacing: 0.8px;

`;
export const TitleContainer = styled.div`
    height: 60%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`;

export const StoresButtonsContainer = styled.div`
  width: 100%;
  margin: 1em;
  display: flex;
  justify-content: center;
  margin-left: -0.25em;
`;

export const SocialButtonsContainer = styled.div`
  width: 100%;
  margin: 1em;
  display: flex;
  justify-content: center;
  margin-left: -0.25em;
  margin-top: 5em;
  margin-bottom: 1.5em;

`;

export const StoreButtonStyle = {
  height: '1.75em',
  width: '6em',
  margin: '0.75em',
  border: 'solid 0.0075em white',
  borderRadius:  '1.25em',
}

export const Mantra = styled(Title)`
  color: white;
  font-size: 0.9em;
  font-weight: 350;
  line-height: 1.25em;
  text-align: center;
  margin:  0.75em 0 0.75em 0;
`;

export const Signature = styled(Title)`
    align-self: center;
    color: rgba(255,255,255,0.82);
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 0.1px;

`;
