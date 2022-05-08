export const Die = (props) => {
    return(
        <div className="dice--face">
            <h2 className="dice--number">{props.value}</h2>
        </div>
    );
};