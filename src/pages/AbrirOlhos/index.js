import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import ImmersiveMode from 'react-native-immersive-mode'

import { Container } from '../Menu/styles';
import { zoomIn, zoomOut, shake } from '../../animations';
import { Image, NarratorText, Choices, Choice, ChoiceText, ImageContainer } from './styles';
// import Teste from '';

export default function AbrirOlhos() {
  
  const [pressDisable, setPressDisable] = useState(true);
  const [text, setText] = useState({});
  const [isChoice, setIsChoice] = useState(false);
  const [currentChoices, setCurrentChoices] = useState([]);
  const [choicesState, setChoicesState] = useState({});

  function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    setText(textNode);
    setCurrentChoices([]);
    if(textNode.choices) {
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
    console.log(choice);
    if(choice.setState) {
      let states = choicesState;
      states = Object.assign(states, choice.setState)
      setChoicesState(states);
      showTextNode(choice.nextText);
    } else {
      showTextNode(choice.nextText);
    }
  }

  console.log(choicesState);

  const textNodes = [
    {
      id: 1,
      text: 'Você está em uma sala escura, nela não existem mobílias, em sua perpetua escuridão nada além de seu contorno pode ser visto, ou melhor, sentido...',
      nextText: 2
    },
    {
      id: 2,
      text: 'Você levanta...',
      choices: [
        {
          text: 'toco meu rosto',
          nextText: 2.1,
        },
        {
          text: 'encaro o abismo',
          nextText: 2.2,
        }
      ]
    },
    {
      id: 2.1,
      text: 'Seus olhos estão fechados.',
      choices: [
        {
          text: 'abrir os olhos',
          nextText: 3
        }
      ]
    },
    {
      id: 2.2,
      text: 'Ele te encara novamente, o medo corrói cada parte do seu ser, você não está sozinho, está com o abismo. ',
      nextText: 3
    },
    {
      id: 3,
      text: 'As luzes acendem, há uma porta, uma caixa escrita “Lembranças” e um espelho quebrado em 3 partes.',
      choices: [
        {
          text: 'ir até a porta',
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
      text: 'A porta está trancada.',
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
      text: 'A caixa está lacrada.',
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
      text: 'O reflexo corrompido distorce sua sombra, e do ângulo certo, há um buraco em seu peito.',
      choices: [
        {
          text: 'fitar a sombra',
          nextText: 4.1,
        },
        {
          text: 'enfiar a mão no buraco do peito',
          nextText: 4.2
        },
        {
          text: 'pegar caco de vidro',
          nextText: 4.3
        }
      ]
    },
    {
      id: 4.1,
      text: 'Então você finalmente resolve abrir os olhos, ver a verdade do ser é sempre o primeiro passo.\n\n-Oh... Olá amigo, já está acordado? Fico feliz que voltou.',
      choices: [
        {
          text: 'enfiar a mão no buraco do peito',
          nextText: 4.2
        },
        {
          text: 'pegar caco de vidro',
          nextText: 4.3
        }
      ]
    },
    {
      id: 4.2,
      text: 'Você encontrou uma chave!', 
      choices: [
        {
          text: 'Ir até a porta e sair do quarto',
          nextText: 5
        },
        {
          text: 'Voltar a encarar o espelho',
          nextText: 4.21
        }
      ]
    },
    {
      id: 4.21,
      text: '',
      choices: [
        {
          text: 'pegar caco de vidro',
          nextText: 4.3
        }
      ]
    },
    {
      id: 4.3,
      text: '',
      choices: [
        {
          text: 'cortar jugular',
          nextText: 4.31 
        },
        {
          text: 'ir até a caixa',
          nextText: 4.33 
        },
      ]
    },
    {
      id: 4.31,
      text: 'Você não teve forças para abrir a porta e está tudo bem...',
      choices: [
        {
          text: 'abrir os olhos',
          nextText: 4.311
        } 
      ]
    },
    {
      id: 4.311,
      text: 'Tudo a de ficar melhor, até o mais profundo dos abismos tem um final... Caso esteja se sentindo deprimido ou com desejo suicida, disque 188 ou acesse o site https://www.cvv.org.br, com todo amor, BS Studios!',
      nextText: 4.3
    },
    {
      id: 4.33,
      text: '',
      choices: [
        {
          text: 'deixar a caixa no chão', // Ficará um tempo sem poder acessar a caixa.
          nextText: 4.331,
          setState: { acessoCaixa: false }
        },
        {
          text: 'abrir a caixa',
          nextText: 4.332,
          setState: { acessoCaixa: true }
        }
      ]
    },
    {
      id: 4.331,
      text: '“Algumas vezes, a vastidão do esquecimento é mais confortável que a o peso da realidade.”',
      choices: [
        {
          text: 'sair do quarto',
          nextText: 5
        }
      ]
    },
    {
      id: 4.332,
      text: 'O medo primal invade porta a dentro, a dor das escolhas consomem tua sanidade, o medo e depressão voltam a tomar conta.',
      nextText: 4.333,
    },
    {
      id: 4.333,
      text: '-E foi por isso que escolhemos por tudo nessa caixa amigo, não aguentamos mais tal peso, feche a caixa, retorne ao esquecimento, retorne ao conforto da vastidão.',
      nextText: 4.334,
    },

    /////////////////////////REVISÃO PARADA AQUI/////////////////////////////////
    {
      id: 4.334,
      text: 'Você abre seus olhos, o loop não recomeça, a caixa está lacrada com mais uma camada de fita, o espelho está intacto e a porta completamente aberta.',
      choices: [
        {
          text: 'fechar a caixa e fechar os olhos',
          nextText: 4.3341, 
        },
        {
          text: 'adentrar na caixa',
          nextText: 4.3342
        }
      ]
    },
    {
      id: 4.3341,
      text: 'Você abre seus olhos, o loop não recomeça, a caixa está lacrada com mais um layer de fita, o espelho está intacto e a porta completamente aberta.',
      choices: [
        {
          text: 'sair do quarto',
          nextText: 5
        }
      ]
    },
    {
      id: 4.3342,
      text: 'O frio se espalha pelo seu corpo, o clima fica frio,',
      // nextText: 
    }
  ]
  useEffect(() => {
    setPressDisable(true);
    setIsChoice(false);
    ImmersiveMode.setBarMode('BottomSticky');
    ImmersiveMode.setBarStyle('Dark');
    setTimeout(() => {
      showTextNode(1);
    }, 2000)
  }, [])

  return (
    <Container>
      {/* <ImageContainer>
        <Image 
          animation={shake} iterationCount={Infinity} duration={500} easing="linear"
          source={Teste} resizeMode="contain" 
        />
      </ImageContainer> */}
      <TouchableWithoutFeedback
        onPress={() =>  {
          if(currentChoices.length > 0) {
            return  
          } else if(!pressDisable){
            setPressDisable(true);
            if(!isChoice) {
              showTextNode(text.nextText); 
            }
          } 
        }
      }
      >
        <NarratorText
          // minDelay={20} maxDelay={80}
          minDelay={10} maxDelay={10}
          typing={1} fixed={true}
          onTyped={() => {setPressDisable(true); setIsChoice(false)}}
          onTypingEnd={() => {setPressDisable(false); !isChoice && text.choices && setIsChoice(true);}}
        >
          {text.text !== undefined ? text.text : ''}
        </NarratorText> 
      </TouchableWithoutFeedback>
   
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