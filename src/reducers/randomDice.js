import { 
  DiceOne, 
  DiceTwo, 
  DiceThree, 
  DiceFour, 
  DiceFive, 
  DiceSix 
} from 'styled-icons/fa-solid';

const dices = [DiceOne, DiceTwo, DiceThree, DiceFour, DiceFive, DiceSix];

const defaultState = [DiceOne, DiceOne, 2, []];

// const randomDice = (state = [DiceOne, DiceTwo, [3], []], action) => {
const randomDice = (state = defaultState, { type }) => {

  switch (type) {
    case 'RANDOM_DICE':
      let rnd1 = Math.floor(Math.random() * 6);
      let rnd2 = Math.floor(Math.random() * 6);
      let score = rnd1+rnd2+2;
      return [
        dices[rnd1],
        dices[rnd2],
        score,
        [...state[3], score]
      ];
    case 'RESET_STATE':
      return defaultState;
    default:
      return state;
  }
}

export default randomDice;