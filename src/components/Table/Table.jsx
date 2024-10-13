import { TableHead } from "./components/TableHead/TableHead";
import { TableRow } from "./components/TableBody/TableRow";
import InvoiceCell from "./components/TableBody/CellsVariations/InvoiceCell";
import DateCell from "./components/TableBody/CellsVariations/DateCell";
import PurchaseCell from "./components/TableBody/CellsVariations/PurchaseCell";
import UserCell from "./components/TableBody/CellsVariations/UserCell";
import StatusCell from "./components/TableBody/CellsVariations/StatusCell";
import LinksCell from "./components/TableBody/CellsVariations/LinksCell";
import { useState } from "react";

const Table = ({data = []}) => {

    const handlers = {
        dateClickHandler: ()=> {},
        invoiceClickHandler: () => true
    }

    return (
        <div className="pl-3 pr-3 box-border">
            <div className="border-2 border-lighter-main-color rounded-lg">
                <table className="w-full ">
                    <TableHead handlers={handlers} isChecked={false} />
                    <tbody>
                        {
                            data.map((row) => {
                                return (
                                    <TableRow key={row.invoice}>
                                        <InvoiceCell invoiceNumber={row.invoice}/>
                                        <DateCell timestamp={row.date}/>
                                        <StatusCell status={row.status}/>
                                        <UserCell email={row.customerInfo.email} name={row.customerInfo.name} url={row.customerInfo.picUrl}/>
                                        <PurchaseCell/>
                                        <LinksCell/>
                                    </TableRow>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
        
    )
}

export default Table;