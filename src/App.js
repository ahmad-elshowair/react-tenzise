
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
        isHeld: true
      });
    }
    return newDice;
  };

  const [dice, setDice] = React.useState(allNewDice());

  const diceElements = dice.map(die => {
    return <Die key={die.id} value={die.value} isHeld={die.isHeld}/>;
  });
  
  const rollDice = () =>{
    return setDice(allNewDice);
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
