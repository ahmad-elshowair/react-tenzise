import { nanoid } from "nanoid";
import React from "react";
import { Dot } from "./Dot";

export const Die = (props) => {
    const style = {
        backgroundColor: props.isHeld ? "#59E391": "#FFF"
    }

    const allDots = () =>{
        const newDots = [];
        for (let i = 0; i < props.value; i++) {
            newDots.push({
                id: nanoid()
            });
        }
        return newDots;
    }

    const [dots, setDots] = React.useState(allDots());

    const dotsElements = dots.map(dot => <Dot key={dot.id}/>);
    return(
        <div 
            className="dice--face" 
            style={style} 
            onClick={props.hold}
        >
            <h2 className="dice--value">
                {dotsElements}
            </h2>
        </div>
    );
};