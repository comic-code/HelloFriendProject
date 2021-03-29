import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Vibration, Dimensions } from 'react-native';
import {Glitch} from 'rn-glitch-effect';
import { Container, OpenButton, OpenEyesBackground, OpenedEyesBackground } from './styles';

import OpenEyesAnimation from '../../../assets/img/open.mp4'
import OpenedEyes from '../../../assets/img/opened.jpg';


export default function Menu({ navigation }) {

  const [isPaused, setIsPaused] = useState(true); 
  const [endAnimation, setEndAnimation] = useState(false);
  
  return (
    <Container>
      {endAnimation 
        ? <OpenedEyesBackground 
          source={OpenedEyes}
          glitchDuration={600}
          glitchAmplitude={10}
          imageStyle={{
            flex: 1,
            width: Dimensions.get('window').width
            // position: 'absolute',
            // alignItems: 'stretch',
          }}
        />
        : <OpenEyesBackground
        source={OpenEyesAnimation}
        muted={true}
        paused={isPaused}
        resizeMode={"contain"}
        rate={1}
        ignoreSilentSwitch={"obey"}
        onEnd={() => {setEndAnimation(true); setTimeout(() => {Vibration.vibrate(500); navigation.navigate('AbrirOlhos')}, 600)}}
      />
      }
  
      {isPaused 
        && <OpenButton onPress={() => {setIsPaused(false)}}>
        <Glitch text={'Abrir os olhos'}
          shadowColor="#EA048D"
          glitchDuration={400}
          repeatDelay={1000}
          glitchAmplitude={10}
          textStyle={{
            color: '#fff',
            fontSize: 50,
            fontFamily: 'sans-serif-condensed'
          }}
        />
        </OpenButton>
      }
    </Container>
  );
};