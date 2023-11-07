import CurrentExpenses from "./CurrentExpenses"
import GraphicExpenses from "./GraphicExpenses"
import VariationExpenses from "./VariationExpenses"
import WeekExpenses from "./WeekExpenses"


const Landing = () => {
    return (
        <>
            <WeekExpenses />
            <GraphicExpenses />
            <CurrentExpenses />
            <VariationExpenses />
        </>
    )
}

export default Landing