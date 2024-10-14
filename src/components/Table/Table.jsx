import { TableHead } from "./components/TableHead/TableHead";
import { TableRow } from "./components/TableBody/TableRow";
import InvoiceCell from "./components/TableBody/CellsVariations/InvoiceCell";
import DateCell from "./components/TableBody/CellsVariations/DateCell";
import PurchaseCell from "./components/TableBody/CellsVariations/PurchaseCell";
import UserCell from "./components/TableBody/CellsVariations/UserCell";
import StatusCell from "./components/TableBody/CellsVariations/StatusCell";
import LinksCell from "./components/TableBody/CellsVariations/LinksCell";

const Table = ({isLoading=false, error='', data = [], updateData}) => {
    return (
        <div className="pl-3 pr-3 box-border">
            <div className="border-2 border-lighter-main-color rounded-lg">
                <table className="w-full ">
                    <TableHead updateData={updateData} />
                    <tbody>
                        {
                            data.map((row) => {
                                return (
                                    <TableRow key={row.invoice}>
                                        <InvoiceCell
                                            updateData={updateData}
                                            invoiceNumber={row.invoice} 
                                            isChecked={row.isChecked}
                                        />
                                        <DateCell timestamp={row.date}/>
                                        <StatusCell status={row.status}/>
                                        <UserCell 
                                            email={row.customerInfo.email} 
                                            name={row.customerInfo.name} 
                                            url={row.customerInfo.picUrl}
                                        />
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
                    (!isLoading && data.length === 0) && <div className="w-full flex justify-center">Empty table</div>
                }
                {
                    error && <div className="w-full text-red-400 flex justify-center">{error}</div>
                }
            </div>
        </div>
    )
}

export default Table;