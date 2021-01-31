import styled from 'styled-components/native';
import TypeWriter from 'react-native-typewriter'
import * as Animatable from 'react-native-animatable';
import normalize from '../../utils/normalize';

export const NarratorText = styled(TypeWriter)`
  font-family: 'PressStart2P-Regular';
  color: #fff;
`
export const DefaultText = styled.Text`
  font-family: 'PressStart2P-Regular';
  color: #fff;
`

export const Choices = styled(Animatable.View)`
  position: absolute;
  bottom: ${normalize(50)}px;
  background-color: #fff2;
  max-height: ${normalize(200)}px;
  margin-top: ${normalize(100)}px;
  padding: ${normalize(10)}px;
  justify-content: space-around;
  width: 100%;
  border-radius: 5px;
`

export const Choice = styled.TouchableOpacity`
  width: 100%;
  background-color: #aaa;
  padding: ${normalize(20)}px ${normalize(5)}px;
  margin-bottom: ${normalize(10)}px;
  margin-top: ${normalize(10)}px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`

export const ChoiceText = styled(DefaultText)`

`