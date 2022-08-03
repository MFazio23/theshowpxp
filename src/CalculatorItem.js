import {Button, FormControlLabel, FormGroup, Switch, TextField, useTheme} from "@mui/material";

function CalculatorItem(props) {
    return props.item.type === 'Boolean' ?
        <BooleanCalculatorItem item={props.item} value={props.value} changeValue={props.changeValue}/> :
        <NumericCalculatorItem item={props.item} value={props.value} changeValue={props.changeValue}/>
}

export default CalculatorItem;

function NumericCalculatorItem(props) {
    const item = props.item;
    return (
        <div key={item.label} className="calculator-item">
            <TextField id="outlined-basic" label={item.label} variant="outlined" size="small" value={props.value}
                       onChange={(e) => props.changeValue(item.label, e.target.value)}
                       type={item.type === 'int' ? 'number' : 'text'}/>
            <Button variant="contained" className="calculator-button"
                    onClick={() => props.changeValue(item.label, (props.value || 0) - 1)}>-</Button>
            <Button variant="contained" className="calculator-button"
                    onClick={() => props.changeValue(item.label, (props.value || 0) + 1)}>+</Button>
        </div>
    )
}

function BooleanCalculatorItem(props) {
    const theme = useTheme();
    const item = props.item;
    return (
        <div key={item.label} className="calculator-item">
            <FormGroup>
                <FormControlLabel control={<Switch checked={props.value}/>} labelPlacement="end"
                                  label={item.name} sx={{color: props.value ? theme.palette.primary.main : theme.palette.text.primary}}
                                  onChange={(event, checked) => props.changeValue(item.label, checked)}/>
            </FormGroup>
        </div>
    )
}