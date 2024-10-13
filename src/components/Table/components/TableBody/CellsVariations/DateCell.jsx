import TableDataCell from "../TableDataCell"

const DateCell = ({timestamp=0}) => {
    const date = new Date(parseInt(timestamp * 1000))
    const formattedDate = timestamp == 0 ? 'Wrong date' : `${date.toLocaleString('default', { month: 'short' })} ${date.getDate()}, ${date.getFullYear()}`
    return (
        <TableDataCell thAdditionalClass="w-fit" divAdditionalClass="w-fit text-center">
            {
                formattedDate
            }
        </TableDataCell>
    )
}

export default DateCell;