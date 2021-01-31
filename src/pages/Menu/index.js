import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, TitleMenu, OpenEyes } from './styles';

export default function Menu({ navigation }) {
  return (
    <Container>
      <TitleMenu>Hello Friend Project</TitleMenu>
      <TouchableOpacity onPress={() => navigation.navigate('AbrirOlhos')}>
      <OpenEyes animation="pulse" iterationCount={Infinity} >abrir os olhos</OpenEyes>
      </TouchableOpacity>
    </Container>
  );
};