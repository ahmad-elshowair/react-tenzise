export const Die = (props) => {
    const style = {
        backgroundColor: props.isHeld ? "#59E391": "#FFF"
    }
    return(
        <div 
            className="dice--face" 
            style={style} 
            onClick={props.hold}
        >
            <h2 className="dice--number">{props.value}</h2>
        </div>
    );
};