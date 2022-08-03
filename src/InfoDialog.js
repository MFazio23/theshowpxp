import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography,
    useTheme
} from "@mui/material";

function InfoDialog(props) {
    const theme = useTheme()
    const linkColor = theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light;
    return (
        <Dialog open={props.isOpen}
                onClose={props.onInfoDialogClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
            <DialogTitle>
                {"MLB the Show PXP Calculator Info"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <div>
                        <Typography variant="body2">
                            Site created by <a href="https://blog.mfazio.dev" style={{color: linkColor}}>
                            Michael Fazio
                        </a>
                        </Typography>
                        <br/>
                        <Typography variant="body2">
                            <a href="https://www.flaticon.com/free-icons/baseball-cap"
                               style={{color: linkColor}}
                               title="baseball cap icons">Baseball cap icons created by Good Ware - Flaticon</a>
                        </Typography>
                    </div>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onInfoDialogClose}>OK</Button>
            </DialogActions>
        </Dialog>
    )
}

export default InfoDialog;