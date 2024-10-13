import TableDataCell from "../TableDataCell"
import Checkbox from "../../../../Checkbox/Checkbox"
import PDF from "../../../../Icons/PDF"


const InvoiceCell = ({updateData, invoiceNumber = 'N/A', isChecked = false}) => {

    const invoiceCheckFun = () => {
        updateData((prevState) => {
            return prevState.map((row) => {
                if(row.invoice === invoiceNumber) {
                    const isChecked = 'isChecked' in row ? !row.isChecked : true
                    row.isChecked = isChecked
                }
                return structuredClone(row)
            });
            
        });
    }


    return (
        <TableDataCell divAdditionalClass="gap-4">
            <Checkbox isChecked={isChecked} handleCheckboxChange={invoiceCheckFun}/>
            <PDF/>
            {'INV-' + invoiceNumber}
        </TableDataCell>
    )
}

export default InvoiceCell;