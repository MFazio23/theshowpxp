import CalculatorItem from "./CalculatorItem";

function CalculatorPane(props) {
    return (
        <div className="calculator-items">
            {
                props.items.map(i => <CalculatorItem key={i.label} item={i} value={props.currentTotals[i.label]}
                                                     changeValue={props.handleChangeValue}/>)
            }
        </div>
    )
}

export default CalculatorPane;