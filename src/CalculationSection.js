import {Stack, Typography} from "@mui/material";

function CalculationSection(props) {
    const battingTotal = 0
    const pitchingTotal = 0;
    const total = battingTotal + pitchingTotal;

    return (
        <div className="calculation-section">
            <Stack>
                <Typography variant="h1">{total}</Typography>
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