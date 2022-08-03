import './App.css';
import PXPCalculator from "./PXPCalculator";
import CalculationSection from "./CalculationSection";
import TopBar from "./TopBar";
import InfoDialog from "./InfoDialog";
import {useState} from "react";
import calculatorItems from "./pxp-stats.json"

function App() {
    const initialStats = calculatorItems.batting.concat(calculatorItems.pitching).reduce((obj, stat) => {
        obj[stat.label] = stat.type === 'Boolean' ? false : 0;
        return obj;
    }, {});

    const [isInfoDialogOpen, setIsInfoDialogOpen] = useState(false);
    const [currentTotals, setCurrentTotals] = useState(initialStats);

    const handleInfoDialogClose = () => {
        setIsInfoDialogOpen(false)
    }

    const handleInfoIconClicked = () => {
        setIsInfoDialogOpen(true)
    }

    const onChangedValue = (label, newValue) => {
        if (newValue >= 0) {
            setCurrentTotals(
                {
                    ...currentTotals,
                    [label]: newValue,
                }
            )
        }
    }

    return (
        <div className="App">
            <header className="app-header">
                <TopBar onInfoIconClicked={handleInfoIconClicked}/>
            </header>
            <main className="app-main">
                <PXPCalculator calculatorItems={calculatorItems} onChangedValue={onChangedValue}
                               currentTotals={currentTotals}/>
            </main>
            <footer className="app-footer">
                <CalculationSection currentTotals={currentTotals}/>
            </footer>
            <InfoDialog isOpen={isInfoDialogOpen} onInfoDialogClose={handleInfoDialogClose}/>
        </div>
    );
}

export default App;
