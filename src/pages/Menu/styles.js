import styled from 'styled-components/native';
import normalize from '../../utils/normalize';
import * as Animatable from 'react-native-animatable';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #202020;
  border: 5px solid #404040;
  border-top-width: 0;
  padding: ${normalize(20)}px;
`;

export const OpenEyes = styled(Animatable.Text)`
  font-family: 'PressStart2P-Regular';
  color: #fff;
`

export const TitleMenu = styled(OpenEyes)`
  font-size: ${normalize(50)}px;
  text-align: center;
  margin-bottom: ${normalize(50)}px;
`

export const DefaultButton = styled.TouchableOpacity`
  border: 1px solid #fff;
`