import styled from 'styled-components/native';
import normalize from '../utils/normalize';
import * as Animatable from 'react-native-animatable';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #202020;
  border: 5px solid #fff;
`;

export const DefaultText = styled(Animatable.Text)`
  font-family: 'PressStart2P-Regular';
  color: #fff;
`

export const TitleMenu = styled(DefaultText)`
  font-size: ${normalize(50)}px;
  text-align: center;
  margin-bottom: ${normalize(50)}px;
`

export const DefaultButton = styled.TouchableOpacity`
  border: 1px solid #fff;
`