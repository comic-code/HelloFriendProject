import React, { useState, useEffect } from 'react';
import { DiceContainer, DiceNumber, LuckText, Container } from './style';
import { DiceAnimation } from '../../animations';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Dice({ handleSetDiceResult, choice, showTextNode }) {
  const [rollDice, setRollDice] = useState(false);
  const [diceSide, setDiceSide] = useState(1);
  const [showNumber, setShowNumber] = useState(false);
  
  useEffect(() => {
    let diceResult = function rollDice() {
      let number;
      do {
        number = Math.floor(Math.random() * 6);
      } while(number < 1 || number > 6)
      return number;
    }
    console.log(diceResult());
    setDiceSide(diceResult);
    handleSetDiceResult(diceResult);
  }, [])

  return (
    <Container>
      {rollDice
        ? <DiceContainer
        animation={DiceAnimation} easing="ease-out" duration={1000}
        onAnimationBegin={() => setShowNumber(false)}  
        onAnimationEnd={() => {
          setShowNumber(true)
          setTimeout(() => {
            setRollDice(false);
            showTextNode(choice.diceValues[diceSide - 1]);
          }, 2000);
        }}  
      >
        {showNumber && <DiceNumber>{diceSide}</DiceNumber>}
      </DiceContainer>
      : <TouchableOpacity onPress={() => setRollDice(true)}>
          <LuckText animation="pulse" iterationCount="infinite">
            Teste sua sorte
          </LuckText>
        </TouchableOpacity>
      }
        
    </Container>
  )
}