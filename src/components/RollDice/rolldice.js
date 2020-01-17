// Libraries
import React from 'react';

// Components
import Button from '../Button/button';
import Container from '../Container/container';
import Paragraph from '../Paragraph/paragraph';
import H1 from '../H1/h1';

// Styles
import { 
  diceStyle, 
  containerStyle,
  titleStyle,
  buttonStyle,
  scoreStyle,
  lastScoresStyle
} from './styles';

import { useDispatch, useSelector } from 'react-redux';
import { randomDiceAction, resetStateAction } from '../../actions';

const RollDice = () => {
  const dispatch = useDispatch();
  const Dice1 = useSelector(state => state.randomDice[0]);
  const Dice2 = useSelector(state => state.randomDice[1]);
  const score = useSelector(state => state.randomDice[2]);
  const lastScores = useSelector(state => state.randomDice[3]);

  return (
    <Container style={containerStyle}>
      <H1 style={titleStyle}>Dice roll game!</H1>
      <Container>
        <Dice1 style={diceStyle}/>
        <Dice2 style={diceStyle}/>
      </Container>
      <Button 
        onClick={() => dispatch(randomDiceAction())}
        style={buttonStyle}
      >Roll Dice!</Button>
      <Paragraph style={scoreStyle}>Score: {score}</Paragraph>
      <Button 
        onClick={() => dispatch(resetStateAction())}
        style={buttonStyle}
      >Restart</Button>

      <Container style={lastScoresStyle}>
        Last scores
        <ul>
          {lastScores.map(score => {
            console.log(lastScores);
            return <li>{score}</li>
          })}
        </ul>
        
      </Container>
    </Container>
  )
}

export default RollDice;