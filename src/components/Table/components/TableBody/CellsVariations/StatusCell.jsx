import TableDataCell from "../TableDataCell"
import StatusBadge from "../../../../StatusBadge/StatusBadge";

const StatusCell = ({status=''}) => {
    return (
        <TableDataCell>
            <StatusBadge status={status}/>
        </TableDataCell>
    )
    
}

export default StatusCell;