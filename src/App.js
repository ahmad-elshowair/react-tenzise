
import { nanoid } from "nanoid";
import React from "react";
import { Die } from "./components/Die";
function App() {

  const allNewDice= () =>{
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        id: nanoid(),
        value: Math.ceil(Math.random() * 6),
        isHeld: false
      });
    }
    return newDice;
  };

  const [dice, setDice] = React.useState(allNewDice());
const[tenzies, setTenzies] = React.useState(false);

React.useEffect(()=>{
  const isAllDiceHeld = dice.every(die => die.isHeld);
  const firstValue = dice[0].value;
  const isAllDiceSameValue = dice.every(die => die.value === firstValue);
  if (isAllDiceHeld && isAllDiceSameValue) {
    setTenzies(true);
  }
  console.log('dice changed');
}, [dice]);

  const holdDice = (id) =>{
    setDice((oldDice) => {
      return oldDice.map((die)=>{
        return die.id === id ? {...die, isHeld: !die.isHeld} : die;
      });
    });
  };

  const diceElements = dice.map(die => {
    return <Die 
              key={die.id} 
              value={die.value} 
              isHeld={die.isHeld}
              hold={() => holdDice(die.id)}
            />;
  });
  
  const rollDice = () =>{
    setDice((oldDice) =>{
      return oldDice.map((die)=>{
        return die.isHeld ? die : {
          id: nanoid(),
          value: Math.ceil(Math.random() * 6),
          isHeld: false
        };
      });
    });
  };

  return (
    <div className="main">
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
      </p>
      <div className="dice--container">
        {diceElements}
      </div>
      {tenzies && <p className="result"> you won !</p>}
      {dice && <button className="roll--btn" onClick={rollDice}>Roll</button>}
    </div>
  );
}

export default App;
