import {FormControlLabel, FormGroup, Slider, Stack, Switch, Typography} from "@mui/material";
import {useState} from "react";

const difficulties = [
    {
        value: 0,
        label: 'R',
        fullLabel: "Rookie"
    },
    {
        value: 1,
        label: 'V',
        fullLabel: "Veteran"
    },
    {
        value: 2,
        label: 'A',
        fullLabel: "All-Star"
    },
    {
        value: 3,
        label: 'H',
        fullLabel: "Hall of Fame"
    },
    {
        value: 4,
        label: 'L',
        fullLabel: "Legend"
    },
];

const calculateStatsTotal = (stats, counts, difficultyValue, isMLBTS26Scoring, isOnline, isDoublePXP) => {
    const statsTotal = stats.reduce((total, stat) => counts[stat.label] * stat.value + total, 0);

    return parseInt(statsTotal * calculateMultiplier(difficultyValue, isMLBTS26Scoring, isOnline, isDoublePXP));
}

const calculateMultiplier = (difficultyValue, isMLBTS26Scoring, isOnline, isDoublePXP) => (1 + (difficultyValue / 10)) * (isOnline ? 1.5 : 1) * (isDoublePXP ? 2 : 1);

function CalculationSection(props) {
    const [difficultyValue, setDifficultyValue] = useState(0);
    const [isMLBTS26Scoring, setIsMLBTS26Scoring] = useState(true);
    const [isOnline, setIsOnline] = useState(false);
    const [isDoublePXP, setIsDoublePXP] = useState(false);

    const battingTotal =
        calculateStatsTotal(props.calculatorItems.batting, props.currentTotals, difficultyValue, isMLBTS26Scoring, isOnline, isDoublePXP);
    const pitchingTotal =
        calculateStatsTotal(props.calculatorItems.pitching, props.currentTotals, difficultyValue, isMLBTS26Scoring, isOnline, isDoublePXP);
    const total = battingTotal + pitchingTotal;

    const difficultyText = (value) => difficulties.find(d => d.value === value)?.fullLabel || "N/A"

    const onDifficultyChange = (event, value) => {
        setDifficultyValue(value);
    }

    const onOnlineChange = (event, isChecked) => {
        setIsOnline(isChecked);
    }

    const onDoublePXPChange = (event, isChecked) => {
        setIsDoublePXP(isChecked);
    }

    return (
        <div className="calculation-section">
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-evenly">
                <Slider
                    aria-label="Always visible"
                    defaultValue={0}
                    min={0}
                    max={4}
                    getAriaValueText={difficultyText}
                    valueLabelFormat={difficultyText}
                    marks={difficulties}
                    onChange={onDifficultyChange}
                    value={difficultyValue}
                    valueLabelDisplay="on"
                    sx={{maxWidth: 500, marginLeft: "2em"}}
                />

                <Stack>
                    <FormGroup>
                        <FormControlLabel control={<Switch checked={isMLBTS26Scoring} onChange={onOnlineChange}/>}
                                          labelPlacement="end" label="MLBTS 26 Scoring"/>
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel control={<Switch checked={isOnline} onChange={onOnlineChange}/>}
                                          labelPlacement="end" label="Online"/>
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel control={<Switch checked={isDoublePXP} onChange={onDoublePXPChange}/>}
                                          labelPlacement="end" label="Double PXP"/>
                    </FormGroup>
                </Stack>

            </Stack>
            <Stack>
                <Typography variant="h2">{total}</Typography>
                <Typography variant="body2">TOTAL PXP</Typography>
            </Stack>
            <Stack direction="row" spacing={2} justifyContent="space-evenly">
                <Stack>
                    <Typography variant="h3">{battingTotal}</Typography>
                    <Typography variant="body2">BATTING PXP</Typography>
                </Stack>
                <Stack>
                    <Typography variant="h3">{pitchingTotal}</Typography>
                    <Typography variant="body2">PITCHING PXP</Typography>
                </Stack>
            </Stack>
        </div>
    )
}

export default CalculationSection;
