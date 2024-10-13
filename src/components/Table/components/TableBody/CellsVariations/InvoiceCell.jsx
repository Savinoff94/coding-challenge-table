import TableDataCell from "../TableDataCell"
import Checkbox from "../../../../Checkbox/Checkbox"
import PDF from "../../../../Icons/PDF"


const InvoiceCell = ({invoiceNumber = 'N/A', isChecked = false, onClick=() => {}}) => {
    return (
        <TableDataCell divAdditionalClass="gap-4">
            <Checkbox isChecked={isChecked} handleCheckboxChange={onClick}/>
            <PDF/>
            {'INV-' + invoiceNumber}
        </TableDataCell>
    )
}

export default InvoiceCell;