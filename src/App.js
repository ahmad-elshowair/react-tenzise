
import React from "react";
import { Die } from "./components/Die";
function App() {

  const allNewDice= () =>{
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  };

  const [dice, setDice] = React.useState(allNewDice());

    const diceElements = dice.map(die => {
      return <Die key={die.id} value={die}/>;
    });


  return (
    <div className="main">
      <div className="dice--container">
        {diceElements}
      </div>
      
    </div>
  );
}

export default App;
