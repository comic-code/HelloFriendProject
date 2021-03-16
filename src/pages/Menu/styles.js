import styled from 'styled-components/native';
import normalize from '../../utils/normalize';
import * as Animatable from 'react-native-animatable';
import { Dimensions } from 'react-native';
import Video from "react-native-video";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #202020;
  border-top-width: 0;
  padding: ${normalize(20)}px;
`;

export const OpenEyes = styled(Animatable.Text)`
  font-family: 'PressStart2P-Regular';
  color: #202020;
`

export const TitleMenu = styled(OpenEyes)`
  font-size: ${normalize(50)}px;
  text-align: center;
  margin-bottom: ${normalize(50)}px;
`

export const OpenEyesBackground = styled(Video) `
  height: ${Dimensions.get('window').height}px;
  width: ${Dimensions.get('window').width}px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  align-items: stretch;
  background-color: #000;
`

export const DefaultButton = styled.TouchableOpacity`
  border: 1px solid #fff;
`