import { TableHead } from "./components/TableHead/TableHead";
import { TableRow } from "./components/TableBody/TableRow";
import InvoiceCell from "./components/TableBody/CellsVariations/InvoiceCell";
import DateCell from "./components/TableBody/CellsVariations/DateCell";
import PurchaseCell from "./components/TableBody/CellsVariations/PurchaseCell";
import UserCell from "./components/TableBody/CellsVariations/UserCell";
import StatusCell from "./components/TableBody/CellsVariations/StatusCell";
import LinksCell from "./components/TableBody/CellsVariations/LinksCell";
import { useState } from "react";
import { useCallback } from "react";

const Table = ({isLoading=false, error='', data = [], updateData}) => {

    const [invoiceCheckboxState, setInvoiceCheckboxState] = useState(false);

    const invoiceClickHandler = useCallback(() => {
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

    }, [updateData, invoiceCheckboxState]);

    const isInvoiceHeadeChecked = () => {
        if(data.length === 0) {
            return false
        }
        return data.every((row) => {
            if(!('isChecked' in row)) {
                return false
            }
            return row.isChecked
        })
    }

    const invoiceCheckFun = useCallback((invoiceNumber) => {
        updateData((prevState) => {
            const updatedData = prevState.map((row) => {
                if(row.invoice === invoiceNumber) {
                    const isChecked = 'isChecked' in row ? !row.isChecked : true
                    row.isChecked = isChecked
                }
                return structuredClone(row)
            });
            return updatedData;
        });

    }, [updateData]);

    const handlers = {
        dateClickHandler: ()=> {},
        invoiceClickHandler
    }

    return (
        <div className="pl-3 pr-3 box-border">
            <div className="border-2 border-lighter-main-color rounded-lg">
                <table className="w-full ">
                    <TableHead handlers={handlers} isChecked={isInvoiceHeadeChecked()} />
                    <tbody>
                        {
                            data.map((row) => {
                                return (
                                    <TableRow key={row.invoice}>
                                        <InvoiceCell onClick={() => invoiceCheckFun(row.invoice)} invoiceNumber={row.invoice} isChecked={row.isChecked}/>
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
                {
                    isLoading && <div className="w-full flex justify-center">Loading...</div>
                }
                {
                    error && <div className="w-full text-red-400 flex justify-center">{error}</div>
                }
            </div>
        </div>
        
    )
}

export default Table;