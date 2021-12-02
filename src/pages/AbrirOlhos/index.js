import React, { useState, useEffect } from 'react';
import { StatusBar, TouchableWithoutFeedback } from 'react-native';
import ImmersiveMode from 'react-native-immersive-mode';

import Dice from '../../components/Dice';
import newAchievement from '../../components/Achievements/NewAchievement';
import { Container } from '../Menu/styles';
import { zoomIn, zoomOut } from '../../animations';
import { NarratorText, Choices, Choice, ChoiceText, Animation } from './styles';

import { Test1, Test2 } from './exportedAnimations';

export default function AbrirOlhos() {
  
  const [pressDisable, setPressDisable] = useState(true);
  const [text, setText] = useState({});
  const [isAnimation, setIsAnimation] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState({});
  const [currentBackgroundColor, setCurrentBackgroundColor] = useState('#141414');
  const [currentTextColor, setCurrentTextColor] = useState('#000');
  const [isChoice, setIsChoice] = useState(false);
  const [rollDice, setRollDice] = useState(false);
  const [diceResult, setDiceResult] = useState(1);
  const [selectedChoice, setSelectedChoice] = useState({});
  const [currentChoices, setCurrentChoices] = useState([]);
  const [choicesState, setChoicesState] = useState({});

  function showTextNode(textNodeIndex) {
  
    rollDice && toggleDice(false);
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    setText(textNode);
    setCurrentChoices([]);
    
    if(textNode.previousAnimation && textNode.previousAnimation.id !== currentAnimation.id) {
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
    setSelectedChoice(choice);
    const nextTextNode = textNodes.filter((text) => { return text.id === choice.nextText })

    if(choice.setState) {
      let states = choicesState;
      states = Object.assign(states, choice.setState)
      setChoicesState(states);
    }

    if(choice.dice) {
      toggleDice(true);
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

  function handleSetDiceResult(result) { setDiceResult(result) }
  function toggleDice(toggle) { setRollDice(toggle) }

  let textNodes = [
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
          // nextText: 2.1,
          nextText: 'meme-2',
          setState: { encarouAbismo: false },
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
          text: 'manter olhos fechados',
          nextText: 2.11
        },
        {
          text: 'abrir os olhos',
          nextText: 3
        }
      ]
    },
    {
      id: 2.11,
      text: 'Tocando seu rosto você consegue sentir que algo está errado, esse lugar por mais familiar que seja, ele não parece real, não deve ser real...',
      choices: [
        {
          text: 'abrir os olhos',
          nextText: 3,
          setState: { rotaMeme: false }
        },
        {
          text: 'rolar na cama',
          nextText: 'meme-1',
          setState: { rotaMeme: true }
        }
      ]
    },
    //ROTA MEME
    {
      id: 'meme-1',
      text: 'Mas é claro que isso está errado, é mais um dos seus pesadelos, o mesmo lugar, mesma casa, acho que é a hora de acordar, amigo.',
      choices: [
        {
          text: 'acordar',
          nextText: 'meme-2'
        }
      ]
    },
    {
      id: 'meme-2',
      text: 'ILL O rosto é todo rasurado em rotoscopia pra representar que ele não se conhece bla bla bla mama meu ovo seus olhos abrem, está tudo em preto e branco, você olha no relógio, são 4:35 AM, você respira fundo, encara o teto e reflete, relógio de parede e são 5:20, banho.\n\nVocê olha pra seu celular, já são quase 6 horas e você ainda está perambulando pela casa de cueca, vamos lá campeão, daqui a pouco é hora de trabalhar.',
      choices: [
        {
          text: 'criar coragem para se vestir',
          dice: true,
          diceValues : ['meme-2-1', 'meme-2-2', 'meme-2-2', 'meme-2-2', 'meme-2-3', 'meme-2-3']
        },
        {
          text: 'ir fazer um café',
          nextText: 'meme-2-4'
        }
      ]
    },
    // Dice = 1
    {
      id: 'meme-2-1',
      text: 'Você encara seu telefone por alguns minutos, apoia a cabeça na mesa...\n\nILL cabeça na mesa.',
      nextText: 'meme-2-1-1'
    },
    {
      id: 'meme-2-1-1',
      text: '...',
      nextText: 'meme-2-1-2'
    },
    {
      id: 'meme-2-1-2',
      text: 'Droga, já são 7 horas, acho que você vai se atrasar.',
      nextText: 'meme-2-1-3'
    },
    {
      id: 'meme-2-1-3',
      text: 'Você corre escada a baixo, e da portaria você vê o 141 indo embora, não adianta correr, esperar 10 minutos agora pra pegar o 142...',
      nextText: 'meme-2-1-4'
    },
    {
      id: 'meme-2-1-4',
      text: '...',
      nextText: 'meme-2-1-5'
    },
    {
      id: 'meme-2-1-5',
      text: 'Ótimo, chegou o ônibus, é isso mesmo, aquele que chacoalha e te deixa enjoado.\n\nILL você no ônibus chacoalhando indo pra o trabalho, entra no trabalho, senta em frente ao PC, respira fundo e começa a clicar, um relógio girando 3 horas em 3 segundos, você encosta a cabeça na mesa e aquele menu de abertura, ABRIR OS OLHOS.',
      nextText: 'meme-3'
    },
    // Dice = 2, 3, 4
    {
      id: 'meme-2-2',
      text: 'Você encara o telefone, assiste um ou 2 vídeos no Youtube',
      nextText: 'meme-2-2-1'
    },
    {
      id: 'meme-2-2-1',
      text: '...',
      nextText: 'meme-2-2-2'
    },
    {
      id: 'meme-2-2-1',
      text: '...\n\nDroga, quase 7 horas, você realmente deveria levantar.',
      nextText: 'meme-2-2-3'
    },
    {
      id: 'meme-2-2-3',
      text: 'Você corre até o quarto, pega a primeira roupa que te aparece e veste às pressas.\n\n ILL clipe vestindo.',
      nextText: 'meme-2-2-4'
    },
    {
      id: 'meme-2-2-4',
      text: 'Você corre até o quarto, pega a primeira roupa que te aparece e veste às pressas.',
      nextText: 'meme-2-2-5'
    },
    {
      id: 'meme-2-2-5',
      text: 'Você desce as escadas, e olha, o ônibus 141 está lá te esperando, pelo menos não é o que chacoalha. \n\n ILL no ônibus indo pra o trabalho, entra no trabalho, senta em frente ao PC, respira fundo e começa a clicar, um relógio girando 3 horas em 3 segundos, você encosta a cabeça na mesa e aquele menu de abertura, ABRIR OS OLHOS.',
      nextText: 'meme-3'
    },
    // Dice = 5, 6
    {
      id: 'meme-2-3',
      text: 'Você levanta, estica as costas, respira fundo, vai ser um longo dia.',
      nextText: 'meme-2-3-1'
    },
    {
      id: 'meme-2-3-1',
      text: 'Você levanta, estica as costas, respira fundo, vai ser um longo dia.',
      nextText: 'meme-2-3-1'
    },
    {
      id: 'meme-2-3-1',
      text: 'ILL indo olhando pra baixo. \n\nCaminhando da sala para o quarto, você sente falta daquele belíssimo café da manhã, mas você não está tão disposto assim. \n\nIndo até o guarda roupa, pega sua camiseta preta, seu casaco, sua calça jeans e seu tênis. \n\nVocê desce as escadas, e olha, o ônibus 141 está lá te esperando, pelo menos não é o que chacoalha.',
      nextText: 'meme-2-3-2'
    },
    {
      id: 'meme-2-3-2',
      text: 'ILL no ônibus indo pra o trabalho, entra no trabalho, senta em frente ao PC, respira fundo e começa a clicar, um relógio girando 3 horas em 3 segundos, você encosta a cabeça na mesa e aquele menu de abertura, ABRIR OS OLHOS.',
      nextText: 'meme-3'
    },
    // Fazer café
    {
      id: 'meme-2-4',
      text: 'Você levanta, estala suas costas e vai até o fogão, e prepara seu café instantâneo. ILL fazendo café kk',
      nextText: 'meme-2-4-1',
    },
    {
      id: 'meme-2-4-1',
      text: '5 minutinhos são o suficiente para que seu café fique pronto.',
      choices: [
        {
          text: 'Deixar café preto',
          nextText: 'meme-2-4-1-1'
        },
        {
          text: 'Por açúcar',
          nextText: 'meme-2-4-1-2'
        }
      ]
    },
    {
      id: 'meme-2-4-1-1',
      text: 'ILL tomando café puro.',
      nextText: 'meme-2-4-2'
    },
    {
      id: 'meme-2-4-1-1',
      text: 'ILL pondo açúcar.',
      nextText: 'meme-2-4-2'
    },
    {
      id: 'meme-2-4-2',
      text: 'Você está disposto e pronto para um dia produtivo, vamos lá... \n\n ILL vai indo olhando pra baixo.',
      nextText: 'meme-2-4-3'
    },
    {
      id: 'meme-2-4-3',
      text: 'Caminhando da cozinha para o quarto, você sente falta daquele belíssimo café da manhã, mas você não está tão disposto assim. \n\nIndo até o guarda roupa, pega sua camiseta preta, seu casaco, sua calça jeans e seu tênis. \n\nVocê põe a sua roupa, desce as escadas do prédio, e vai ao ponto de ônibus. \n\nVocê desce as escadas, e olhaônibus 141 está lá te esperando, pelo menos não é o que chacoalha. ',
      nextText: 'meme-2-4-4'
    },
    {
      id: 'meme-2-4-4',
      text: 'Você está disposto e pronto para um dia produtivo, vamos lá...',
      nextText: 'meme-2-4-5'
    },
    {
      id: 'meme-2-4-5',
      text: 'Você desce as escadas, e olha, o ônibus 141 está lá te esperando, pelo menos não é o que chacoalha. ILL no ônibus indo pra o trabalho, entra no trabalho, senta em frente ao PC, respira fundo e começa a clicar, um relógio girando 3 horas em 3 segundos, você encosta a cabeça na mesa e aquele menu de abertura, ABRIR OS OLHOS.'
    },
    
    // ROTA NORMAL
    {
      id: 2.2,
      text: 'Ele consome até a última gota da sua fina película sanidade, o medo corrói os teus ossos, você não está sozinho, agora está com o abismo.',
      nextText: 3,
      // achievement: 
    },
    {
      id: 3,
      previousAnimation: Test1,
      previousAnimationColor: '#fff',
      text: 'As luzes acendem, existem três coisas que roubam sua atenção, elas estão dividindo espaço com você.',
      nextAnimation: Test2,
      nextAnimationColor: '#000',
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
    setDiceResult(1);
    ImmersiveMode.setBarMode('BottomSticky');
    ImmersiveMode.setBarStyle('Dark');
    setTimeout(() => { showTextNode(1) }, 1000);
  }, [])

  useEffect(() => {
    setCurrentTextColor(currentBackgroundColor === '#141414' ? '#fff' : '#000');
  }, [currentBackgroundColor])

  return (
    <Container currentBackgroundColor={currentBackgroundColor}>
      <StatusBar animated backgroundColor={currentBackgroundColor}
        barStyle={currentBackgroundColor == '#fff' ? 'dark-content' : 'light-content'} />
      {isAnimation
        ? <Animation currentBackgroundColor={currentBackgroundColor}
          source={currentAnimation.animation}
          resizeMode={"contain"}
          rate={1}
          paused={false}
          ignoreSilentSwitch={"obey"}
          onEnd={() => {
            if(currentAnimation.id === text.previousAnimation.id) {
              text.previousAnimationColor && setCurrentBackgroundColor(text.previousAnimationColor);
              setCurrentAnimation();
              showTextNode(text.id);
              setIsAnimation(false);
            } else {
              text.nextAnimationColor && setCurrentBackgroundColor(text.nextAnimationColor);
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
      {isChoice 
        && 
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
      }
      {rollDice && 
        <Dice 
          handleSetDiceResult={handleSetDiceResult}
          choice={selectedChoice}
          showTextNode={showTextNode}  
        />}
      <Achievements />
    </Container>
  );
};