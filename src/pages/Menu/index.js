import React, { useState } from 'react';
import { TouchableOpacity, Vibration } from 'react-native';
import { Container, TitleMenu, OpenEyes, OpenEyesBackground } from './styles';

import OpenEyesAnimation from '../../../assets/img/open.mp4'


export default function Menu({ navigation }) {

  const [isPaused, setIsPaused] = useState(0); 
  return (
    <Container>
      <OpenEyesBackground
        source={OpenEyesAnimation}
        muted={true}
        // paused={true}
        resizeMode={"contain"}
        rate={isPaused}
        ignoreSilentSwitch={"obey"}
        onEnd={() => {Vibration.vibrate(100); navigation.navigate('AbrirOlhos')}}
      />
      {isPaused === 0 
        && <TouchableOpacity onPress={() => {setIsPaused(1)}}>
        <OpenEyes animation="pulse" iterationCount={Infinity} >abrir os olhos</OpenEyes>
        </TouchableOpacity>
      }
    </Container>
  );
};