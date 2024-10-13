import classNames from "classnames"
import TableHeaderCell from './TableHeaderCell'
import { TableRow } from "../TableBody/TableRow"
import { VerticalArrows } from "../../../Icons/Arrows"
import InvoiceTableHeader from "./CellVariations/InvoiceTableHeader"


export const TableHead = ({updateData, additionalClass = ''}) => {

    return (
        <thead className={classNames('bg-lighter-main-color', 'w-full','box-border', 'rounded-t-lg', additionalClass)}>
            <TableRow additionalClass="h-6 border-none"> 
                <InvoiceTableHeader updateData={updateData} />
                <TableHeaderCell divAdditionalClass="text-left align-middle">
                    Date
                    <VerticalArrows width={'25'} height={'25'}/>
                </TableHeaderCell>
                <TableHeaderCell divAdditionalClass="text-left align-middle ">
                    Status
                    <VerticalArrows width={'25'} height={'25'}/>
                </TableHeaderCell>
                <TableHeaderCell divAdditionalClass="text-left align-middle "> 
                    Customer
                </TableHeaderCell>
                <TableHeaderCell divAdditionalClass="text-left align-middle "> 
                    Purchase
                </TableHeaderCell>
                <TableHeaderCell divAdditionalClass="text-left align-middle "> 
                    
                </TableHeaderCell>
            </TableRow>
        </thead >
    )
}