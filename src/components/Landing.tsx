import CurrentExpenses from "./CurrentExpenses"
import GraphicExpenses from "./GraphicExpenses"
import VariationExpenses from "./VariationExpenses"
import WeekExpenses from "./WeekExpenses"


const Landing = () => {
    return (
        <>
            <div className="flex justify-center flex-col gap-3 w-1/2 mx-auto rounded">
                <WeekExpenses />
                <GraphicExpenses/>
                <CurrentExpenses />
                <VariationExpenses />
            </div>
        </>
    )
}

export default Landing