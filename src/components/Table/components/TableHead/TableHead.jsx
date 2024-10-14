import classNames from "classnames"
import TableHeaderCell from './TableHeaderCell'
import { TableRow } from "../TableBody/TableRow"
import InvoiceTableHeader from "./CellVariations/InvoiceTableHeader"
import SortiongArrows from "./CellVariations/SortingArrows"
import { dataFields } from "../../../../functions/helpers"


export const TableHead = ({updateData, additionalClass = ''}) => {

    return (
        <thead className={classNames('bg-lighter-main-color', 'w-full','box-border', 'rounded-t-lg', additionalClass)}>
            <TableRow additionalClass="h-6 border-none"> 
                <InvoiceTableHeader updateData={updateData} />
                <TableHeaderCell
                    divAdditionalClass="text-left align-middle"
                >
                    Date
                    <SortiongArrows updateData={updateData} fieldName={dataFields.date}/>
                </TableHeaderCell>
                <TableHeaderCell
                    divAdditionalClass="text-left align-middle"
                >
                    Status
                    <SortiongArrows updateData={updateData} fieldName={dataFields.status}/>
                </TableHeaderCell>
                <TableHeaderCell
                    divAdditionalClass="text-left align-middle"
                > 
                    Customer
                </TableHeaderCell>
                <TableHeaderCell
                    divAdditionalClass="text-left align-middle"
                > 
                    Purchase
                </TableHeaderCell>
                <TableHeaderCell
                    divAdditionalClass="text-left align-middle"
                > 
                </TableHeaderCell>
            </TableRow>
        </thead >
    )
}