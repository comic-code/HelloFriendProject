import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import { Container } from '../Menu/styles';
import { NarratorText, Choices, Choice, ChoiceText } from './styles';

export default function AbrirOlhos() {
  
  const [pressDisable, setPressDisable] = useState(true);
  const [currentText, setCurrentText] = useState(0);
  const [text, setText] = useState('');
  const [isChoice, setIsChoice] = useState(false);

  const allTexts = [
    {
      choice: false,
      text: 'É uma sala escura, nela não há mobílias, em sua plena escuridão nada pode ser visto...', 
    },
    {
      choice: true,
      text: 'Me levanto...',
      choices: [
        {
          text: 'toco meu rosto',
        },
        {
          text: 'encaro o abismo'
        }
      ]
    }
  ]

  useEffect(() => {
    setPressDisable(true);
    setCurrentText(0);
    setIsChoice(false);
    setTimeout(() => {
      setText(allTexts[currentText].text);
    }, 2000)
  }, [])

  const zoomIn = {
    0: {
      opacity: 0,
      scale: 0,
    },
    0.5: {
      opacity: 1,
      scale: 0.3,
    },
    1: {
      opacity: 1,
      scale: 1,
    },
  };

  const zoomOut = {
    0: {
      opacity: 1,
      scale: 1,
    },
    0.5: {
      opacity: 1,
      scale: 0.3,
    },
    1: {
      opacity: 0,
      scale: 0,
    },
  }

  useEffect(() => {
    setText(allTexts[currentText].text)
    allTexts[currentText].choice ? setPressDisable(true) : setPressDisable(false);
  }, [currentText])

  return (
    <Container>
      <TouchableWithoutFeedback
        onPress={() =>  {
          setPressDisable(true);
          if(!pressDisable){
            console.log(pressDisable);
            currentText < allTexts.length -1 && setCurrentText(currentText + 1);
          }
        }
      }
      >
        <NarratorText
          minDelay={20} maxDelay={80}
          typing={1} fixed={true}
          onTyped={() => setPressDisable(true)}
          onTypingEnd={() => {
            setPressDisable(false);
            setTimeout(() => {
              allTexts[currentText].choice ? setIsChoice(true) : setIsChoice(false);  
            }, 1500);
            }}
        >
          {text}
        </NarratorText> 
      </TouchableWithoutFeedback>
      {isChoice &&
        <Choices animation={isChoice ? zoomIn : zoomOut}>
          {allTexts[currentText].choices.map((choice) => {
            return <Choice key={choice.text}><ChoiceText>{choice.text}</ChoiceText></Choice>
          })}
        </Choices>
      }
    </Container>
  );
};