import {Box, Tab, Tabs} from "@mui/material";
import {useState} from "react";
import SwipeableViews from "react-swipeable-views";
import CalculatorPane from "./CalculatorPane";

function PXPCalculator(props) {
    const [tabValue, setTabValue] = useState(0);
    const onTabChanged = (e, ind) => {
        setTabValue(ind)
    }
    const onTabIndexChanged = (ind) => {
        setTabValue(ind)
    }
    return (
        <Box className="pxp-calculator">
            <Tabs value={tabValue} onChange={onTabChanged} variant="fullWidth">
                <Tab label="Batter PXP"/>
                <Tab label="Pitcher PXP"/>
            </Tabs>
            <SwipeableViews
                index={tabValue}
                animateTransitions={false}
                onChangeIndex={onTabIndexChanged}>
                <CalculatorPane items={props.calculatorItems.batting} handleChangeValue={props.onChangedValue}
                                currentTotals={props.currentTotals}/>
                <CalculatorPane items={props.calculatorItems.pitching} handleChangeValue={props.onChangedValue}
                                currentTotals={props.currentTotals}/>
            </SwipeableViews>
        </Box>
    )
}

export default PXPCalculator;