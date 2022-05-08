
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
      <div className="dice--container">
        {diceElements}
      </div>
      {dice && <button className="roll--btn" onClick={rollDice}>Roll</button>}
    </div>
  );
}

export default App;
