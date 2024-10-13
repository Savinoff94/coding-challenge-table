import { useState } from "react";
import TableHeaderCell from "../TableHeaderCell";
import Checkbox from "../../../../Checkbox/Checkbox";
import SortiongArrows from "./SortingArrows";
import { dataFields } from "../../../../../functions/helpers";
const InvoiceTableHeader = ({updateData}) => {

    const [invoiceCheckboxState, setInvoiceCheckboxState] = useState(false);

    const invoiceClickHandler = () => {
        updateData((prevState) => {
            const updatedData = prevState.map((row) => {
                return {
                    ...row,
                    isChecked: !invoiceCheckboxState
                };
            });
            return updatedData;
        });
        setInvoiceCheckboxState((prevState) => !prevState)
    }

    return (
        <TableHeaderCell className="text-left align-middle">
            <Checkbox isChecked={invoiceCheckboxState} handleCheckboxChange={invoiceClickHandler}/>
            Invoice
            <SortiongArrows updateData={updateData} fieldName={dataFields.invoice} />
        </TableHeaderCell>
    )
}

export default InvoiceTableHeader;