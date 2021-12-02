import styled from 'styled-components/native';
import normalize from '../../utils/normalize';
import * as Animatable from 'react-native-animatable';
import {Glitch, GlitchImage} from 'rn-glitch-effect';
import { Dimensions } from 'react-native';
import Video from "react-native-video";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.currentBackgroundColor || '#202020'};
  border-top-width: 0;
  padding: ${normalize(20)}px;
`;

export const OpenButton = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
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
  background-color: #141414;
`

export const OpenedEyesBackground = styled(GlitchImage)`
  height: ${Dimensions.get('window').height}px;
  width: ${Dimensions.get('window').width}px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  align-items: stretch;
  background-color: #141414;
`

export const AchievementsButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 50px;
  padding: 30px;
`

export const AchievementsText = styled(Animatable.Text)`
  font-family: 'PressStart2P-Regular';
  color: #fff;
`