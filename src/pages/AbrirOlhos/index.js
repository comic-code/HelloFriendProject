import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import ImmersiveMode from 'react-native-immersive-mode';

import { Container } from '../Menu/styles';
import { zoomIn, zoomOut } from '../../animations';
import { NarratorText, Choices, Choice, ChoiceText, Animation } from './styles';

import { Test1, Test2 } from './exportedAnimations';

export default function AbrirOlhos() {
  
  const [pressDisable, setPressDisable] = useState(true);
  const [text, setText] = useState({});
  const [isAnimation, setIsAnimation] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('');
  const [currentBackgroundColor, setCurrentBackgroundColor] = useState('#141414');
  const [currentTextColor, setCurrentTextColor] = useState('#000');
  const [isChoice, setIsChoice] = useState(false);
  const [currentChoices, setCurrentChoices] = useState([]);
  const [choicesState, setChoicesState] = useState({});
    
  console.log(choicesState);

  function showTextNode(textNodeIndex) {
    
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    setText(textNode);
    
    setCurrentChoices([]);
    
    if(textNode.previousAnimation && textNode.previousAnimation.id !== currentAnimation.id) {
      console.log(currentAnimation);
      setCurrentAnimation(textNode.previousAnimation);
      setIsAnimation(true);
    } else if(textNode.nextAnimation) {
      setCurrentAnimation(textNode.nextAnimation);
      setIsAnimation(true);
    } else if(textNode.choices) {
      setTimeout(() => {
        textNode.choices.map((choice) => {
          setCurrentChoices(currentChoices => [...currentChoices, choice]);
        })
      }, 1000);
    } else {
      setIsChoice(false);
    }
  }

  function selectChoice(choice) {
    const nextTextNode = textNodes.filter((text) => { return text.id === choice.nextText })

    if(choice.setState) {
      let states = choicesState;
      states = Object.assign(states, choice.setState)
      setChoicesState(states);
      
      if(nextTextNode.previousAnimation) {
        console.log('nextTextNode.previousAnimation')
        setCurrentAnimation(nextTextNode.previousAnimation);
        setIsAnimation(true);
      } else {
        setIsAnimation(false);
        showTextNode(choice.nextText);
      }
    } else {
      if(nextTextNode.previousAnimation) {
        setCurrentAnimation(nextTextNode.previousAnimation);
        setIsAnimation(true);
      } else {
        setIsAnimation(false);
        showTextNode(choice.nextText);
      }
    }
  }

  const textNodes = [
    // ESTRUTURA DEFAULT
    // {
    //   id: 0,
    //   previousAnimation: true,
    //   previousAnimationColor: '#202020',
    //   text: 'bla bla bla'
    //   nextAnimation: false / import
    //   nextAnimationColor: false / '#ddd' 
    //   choices: [
    //     {
    //       text: 'bla não',
    //       nextText: 2.1,
    //       setState: { atributoEstado: false }
    //     },
    //     {
    //       text: 'bla sim',
    //       nextText: 2.2,
    //       setState: { atributoEstado: true }
    //     }
    //   ]
    // },
    {
      id: 1,
      text: 'Você está em uma sala escura, nela não existe nada, apenas 4 paredes e nenhuma mobília, na sua perpétua escuridão a única coisa que pode ser vista, ou melhor, sentida é o seu contorno...',
      choices: [
        {
          text: 'tocar seu rosto',
          nextText: 2.1,
          setState: { encarouAbismo: false }
        },
        {
          text: 'encarar o abismo',
          nextText: 2.2,
          setState: { encarouAbismo: true }
        }
      ]
    },
    {
      id: 2.1,
      text: 'Você levanta, se entende como ser neste espaço claustrofóbico, e tocando o próprio rosto, sente que até então eles não estavam realmente abertos...',
      choices: [
        {
          text: 'abrir os olhos',
          nextText: 3
        }
      ]
    },
    {
      id: 2.2,
      text: 'Ele consome até a última gota da sua fina película sanidade, o medo corrói os teus ossos, você não está sozinho, agora está com o abismo.',
      nextText: 3
    },
    {
      id: 3,
      previousAnimation: Test1,
      previousAnimationColor: '#141414',
      text: 'As luzes acendem, existem três coisas que roubam sua atenção, elas estão dividindo espaço com você.',
      nextAnimation: Test2,
      nextAnimationColor: '#fff',
      choices: [
        {
          text: 'ir à porta',
          nextText: 3.1
        },
        {
          text: 'ir até a caixa',
          nextText: 3.2
        },
        {
          text: 'ir até o espelho',
          nextText: 4
        }
      ]
    },
    {
      id: 3.1,
      text: 'ILL Há uma porta, desenho estático, passa 2,5 segundos em tela, depois a frase\n\n\n(A porta está lacrada, isso é mostrado pelo som de porta abaixo.)\n\n\nILL A maçaneta gira, o som é de porta trancada.',
      choices: [
        {
          text: 'ir até a caixa',
          nextText: 3.2
        },
        {
          text: 'ir até o espelho',
          nextText: 4
        }
      ],
    },
    {
      id: 3.2,
      text: 'ILL Static, caixa lacrada com uma camada de fita, na caixa tem escrito “Tralhas do papai”.\n\nVocê precisa de algo para abrir isso.',
      choices: [
        {
          text: 'ir até a porta',
          nextText: 3.1
        },
        {
          text: 'ir até o espelho',
          nextText: 4
        }
      ]
    },
    {
      id: 4,
      text: 'ILL Desenho do espelho com as 3 imagens refletidas abaixo.\n\nVocê se depara com um espelho fragmentado, seu reflexo é totalmente distorcido, você está fragmentado em três.\n\nNo canto superior reflexo parece negro, denso, quase como se a sua sombra tomasse de assalto este lugar que foi dado ao teu rosto. Adicionar close do reflexo em ILL.\n\nNo inferior você percebe um buraco estranhamente largo no lugar do seu peito, coisa essa que não aparece no seu corpo físico. Adicionar close do reflexo em ILL.\n\nA última peça se encontra do lado esquerdo, ela pende até quase cair, parece que\n\naquele belo e afiado caco clama pelo toque de sua palma. Adicionar close do reflexo em ILL',
      choices: [
        {
          text: 'fitar a sombra',
          nextText: choicesState.encarouAbismo ? 4.1 : 4.2,
        },
        {
          text: 'enfiar a mão no buraco do peito',
          nextText: 4.3
        },
        {
          text: 'pegar caco de vidro',
          nextText: 4.4
        }
      ]
    },
    {
      id: 4.1,
      text: 'Você estende a mão, toca o espelho, o reflexo da sombra se estende e toca sua mão de fora, a sombra se estende além do espelho, com a mão fixa em seu ombro, te empurrando para trás, mas apoiando todo seu pouco peso em você. ILL\n\n– Olá amigo. – Ele sorri com os olhos.',
      choices: [
        {
          text: 'você é do abismo?',
          nextText: 4.11,
        },
        {
          text: 'Você é o abismo?',
          nextText: 4.12
        },
        {
          text: 'O que é você?',
          nextText: 4.13
        }
      ]
    },
    {
      id: 4.11,
      text: '– É muito cedo pra isso.',
      choices: [
        {
          text: 'enfiar a mão no buraco do peito',
          nextText: 4.3
        }
      ]
    },
    {
      id: 4.12,
      text: '– Não amigo, você ainda não está pronto para essa conversa.',
      choices: [
        {
          text: 'enfiar a mão no buraco do peito',
          nextText: 4.3
        }
      ] 
    },
    {
      id: 4.13,
      text: '– Eu sou o que sou, um gua para o caminho mais seguro.',
      choices: [
        {
          text: 'enfiar a mão no buraco do peito',
          nextText: 4.3
        }
      ] 
    },
    {
      id: 4.2,
      text: 'Você estende a cabeça em direção ao espelho, força os olhos, uma mão toca teu ombro, tu vira e uma sombra se estende atrás de ti, ele abre grandes olhos brancos, e acena virando a cabeça.',
      choices: [
        {
          text: 'enfiar a mão no buraco do peito',
          nextText: 4.3
        }
      ] 
    },
    {
      id: 4.3,
      text: '– É muito cedo pra isso.',
      choices: [
        {
          text: 'enfiar a mão no buraco do peito',
          nextText: 4.3
        }
      ]
    },
  ]

  useEffect(() => {
    setPressDisable(true);
    setIsChoice(false);
    ImmersiveMode.setBarMode('BottomSticky');
    ImmersiveMode.setBarStyle('Dark');
    setTimeout(() => { showTextNode(1) }, 1000);
  }, [])

  useEffect(() => {
    setCurrentTextColor(currentBackgroundColor === '#141414' ? '#fff' : '#000');
  }, [currentBackgroundColor])

  return (
    <Container currentBackgroundColor={currentBackgroundColor}>
      {isAnimation
        ? <Animation currentBackgroundColor={currentBackgroundColor}
          source={currentAnimation.animation}
          resizeMode={"contain"}
          rate={1}
          paused={false}
          ignoreSilentSwitch={"obey"}
          onEnd={() => {
            text.nextAnimationColor && setCurrentBackgroundColor(text.nextAnimationColor);
            if(currentAnimation.id === text.previousAnimation.id) {
              console.log('t');
              setCurrentAnimation();
              showTextNode(text.id);
              setIsAnimation(false);
            } else {
              if(text.choices) {
                setTimeout(() => {
                  text.choices.map((choice) => {
                    setCurrentChoices(currentChoices => [...currentChoices, choice]);
                  })
                }, 1000);
              } else showTextNode(text.nextText)}}
            }
        />
        : <TouchableWithoutFeedback
          onPress={() =>  {
          if(currentChoices.length > 0) {
            return  
          } else if(!pressDisable){
            setPressDisable(true); 
            if(text.nextAnimation) {
              setIsAnimation(true);
            } else if(!isChoice) {
              showTextNode(text.nextText); 
            }
          } 
        }
      }
      >
        <NarratorText currentTextColor={currentTextColor}
          // minDelay={20} maxDelay={80}
          minDelay={1} maxDelay={5}
          typing={1} fixed={true}
          onTyped={() => {setPressDisable(true); setIsChoice(false)}}
          onTypingEnd={() => {setPressDisable(false); !isChoice && text.choices && setIsChoice(true);}}
        >
          {text.text !== undefined ? text.text : ''}
        </NarratorText> 
      </TouchableWithoutFeedback>
      }
        <Choices animation={isChoice ? zoomIn : zoomOut}>
          {currentChoices.map((choice) => {
            return (
              <Choice
                key={choice.text}
                onPress={() => selectChoice(choice)}
              >
                <ChoiceText>{choice.text}</ChoiceText>
              </Choice>
          )})}
        </Choices>
    </Container>
  );
};