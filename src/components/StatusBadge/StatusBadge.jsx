import classNames from "classnames"
import { BendedArrow } from "../Icons/Arrows"
import Tick from "../Icons/Tick"
import Cross from "../Icons/Cross"
const StatusBadge = ({status}) => {

    const paid = status.toLowerCase() === 'paid'
    const refunded = status.toLowerCase() === 'refunded'
    const cancelled = status.toLowerCase() === 'cancelled'

    const style = {
        'border-red-400': cancelled,
        'border-gray-400': refunded,
        'border-green-400': paid,
        'text-red-400': cancelled,
        'text-gray-400': refunded,
        'text-green-400': paid,
    }


    return (
        <div className={classNames('flex items-center rounded-full w-fit py-1 px-2 border-2', style)}>
            {paid && <Tick width="15" height="15"/>}
            {refunded && <BendedArrow width="15" height="15"/>}
            {cancelled && <Cross width="15" height="15"/>}
            {status === '' ? '' : status.charAt(0).toUpperCase() + status.slice(1)}
        </div>
    )
}

export default StatusBadge;