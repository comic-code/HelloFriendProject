import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled.View`
  flex: 1;
  width: 150%;
  height: 150%;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: #000000aa;
`

export const DiceContainer = styled(Animatable.View)`
  background-color: #EA048D;
  width: 125px;
  height: 125px;
  border-radius: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
`

export const DiceNumber = styled.Text`
  font-size: 40px;
  line-height: 40px;
  font-family: 'PressStart2P-Regular';
  color: #fff;
`