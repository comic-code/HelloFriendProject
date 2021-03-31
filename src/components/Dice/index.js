import React, { useState, useEffect } from 'react';
import { DiceContainer, DiceNumber, Container } from './style';
import { DiceAnimation } from '../../animations';

export default function Dice({ handleSetDiceResult }) {
  const [diceSide, setDiceSide] = useState(1);
  const [showNumber, setShowNumber] = useState(false);
  
  useEffect(() => {
    const diceResult = Math.floor(Math.random() * 6)
    setDiceSide(diceResult);
    handleSetDiceResult(diceResult);
  }, [])

  return (
    <Container>
      <DiceContainer
        animation={DiceAnimation} easing="ease-out" duration={1000}
        onAnimationBegin={() => setShowNumber(false)}  
        onAnimationEnd={() => setShowNumber(true)}  
      >
        {showNumber && <DiceNumber>{diceSide}</DiceNumber>}
      </DiceContainer>
    </Container>
  )
}