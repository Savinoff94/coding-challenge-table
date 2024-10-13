import TableDataCell from "../TableDataCell"
import StatusBadge from "../../../../StatusBadge/StatusBadge";

const StatusCell = ({status=''}) => {
    <TableDataCell>
        <StatusBadge status={status}/>
    </TableDataCell>
}

export default StatusCell;