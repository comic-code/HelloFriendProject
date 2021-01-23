import React from 'react';

import { Container, TitleMenu, DefaultText } from './styles';

export default function Menu() {
  return (
    <Container>
      <TitleMenu>Hello Friend Project</TitleMenu>
      <DefaultText animation="pulse" iterationCount={Infinity} >Toque</DefaultText>
    </Container>
  );
};