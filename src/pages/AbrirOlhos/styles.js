import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import TypeWriter from 'react-native-typewriter'
import * as Animatable from 'react-native-animatable';
import Video from "react-native-video";
import normalize from '../../utils/normalize';

// export const ImageContainer = styled(Animatable.View)`
//   position: absolute;
//   width: 100%;
//   height: ${normalize(300)}px;
//   justify-content: center;
//   align-items: center;
//   top: ${normalize(30)}px;
// `

// export const Image = styled(Animatable.Image)`
//   height: ${normalize(300)}px;
// `

export const Animation = styled(Video) `
  height: ${Dimensions.get('window').height}px;
  width: ${Dimensions.get('window').width}px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  align-items: stretch;
  background-color: ${props => props.currentBackgroundColor || '#202020'};
`

export const NarratorText = styled(TypeWriter)`
  font-family: 'PressStart2P-Regular';
  color: ${props => props.currentTextColor || '#fff'};
`
export const DefaultText = styled.Text`
  font-family: 'PressStart2P-Regular';
  color: #fff;
`

export const Choices = styled(Animatable.View)`
  position: absolute;
  bottom: ${normalize(50)}px;
  background-color: #141414;
  margin-top: ${normalize(100)}px;
  padding: ${normalize(5)}px ${normalize(10)}px;
  justify-content: space-around;
  width: 100%;
  border-radius: 5px;
`

export const Choice = styled.TouchableOpacity`
  width: 100%;
  background-color: #aaa;
  padding: ${normalize(20)}px ${normalize(5)}px;
  margin-bottom: ${normalize(5)}px;
  margin-top: ${normalize(5)}px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  border-bottom-width: 5px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-color: #309ACF;
`

export const ChoiceText = styled(DefaultText)`
  text-align: center;
`