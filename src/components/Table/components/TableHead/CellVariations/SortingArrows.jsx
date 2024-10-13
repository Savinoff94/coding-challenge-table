import { VerticalArrows } from "../../../../Icons/Arrows"
import { fieldToInteger } from "../../../../../functions/helpers"
import { useState } from "react"
const SortiongArrows = ({fieldName='', updateData}) => {

    const [isUp, setIsUp] = useState(false)

    const handleClick = () => {
        updateData((prevData) => {
            const sorted = structuredClone(prevData)
            if(!fieldName) {
                return prevData;
            }
            sorted.sort((a, b) => {


                let aVal = fieldToInteger(a[fieldName]);
                let bVal = fieldToInteger(b[fieldName]);

                if (aVal < bVal) return isUp ? -1 : 1;
                if (aVal > bVal) return isUp ? 1 : -1;
                return 0;

            })

            return sorted
        })
        setIsUp((prevVal) => !prevVal)
    }

    return <VerticalArrows onClick={handleClick} isUp={isUp} width={'25'} height={'25'}/>
}

export default SortiongArrows