import classNames from "classnames"
import TableHeaderCell from './TableHeaderCell'
import { TableRow } from "../TableBody/TableRow"
import { VerticalArrows } from "../../../Icons/Arrows"
import Checkbox from "../../../Checkbox/Checkbox"

export const TableHead = ({handlers, isChecked, additionalClass = ''}) => {

    const {dateClickHandler, invoiceClickHandler} = handlers

    return (
        <thead className={classNames('bg-lighter-main-color', 'w-full','box-border', 'rounded-t-lg', additionalClass)}>
            <TableRow additionalClass="h-6 border-none"> 
                <TableHeaderCell className="text-left align-middle">
                    <Checkbox isChecked={isChecked} handleCheckboxChange={invoiceClickHandler}/>
                    Invoice
                    <VerticalArrows width={'25'} height={'25'}/>
                </TableHeaderCell>
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