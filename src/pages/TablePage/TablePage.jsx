import Table from "../../components/Table/Table"
import SearchInput from "../../components/SearchInput/SearchInput"
import {StatusSelect, options as statusSelectOptions} from "../../components/StatusSelect/StatusSelect"
import {CategorySelect, options as categorySelectOptions} from '../../components/CategorySelect/CategorySelect'
import PageArrowButton from "../../components/PageArrowButton/PageArrowButton"
import useFetchData from "../../hooks/useFetchData"
import { useState, useMemo } from "react"
import { pagination } from "../../functions/helpers"
import PagesList from "../../components/PagesList/PagesList"


const TablePage = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [searchOrder, setSearchOrder] = useState('');
    const [status, setStatus] = useState(statusSelectOptions[0]);
    const [category, setCategory] = useState(categorySelectOptions[0]);

    const { data, loading, error, setData } = useFetchData();
    
    const filteredData = useMemo(() => {
        return data.filter(row => {

            const flags = []

            if(searchOrder) {
                flags.push(row.invoice.includes(parseInt(searchOrder)+''));
            }
            if(status.value.toLowerCase() !== 'all') {
                flags.push(row.status === status.value)
            }
            
            return flags.every((flag) => flag)
        });
    }, [data, searchOrder, status]);


    const {pagesAmount, dataByPage} = pagination(filteredData)
    const pageData = (currentPage in dataByPage) ? dataByPage[currentPage] : [];
    
    return (
        <div className="h-full w-full grid grid-cols-1 grid-rows-12 text-darker-main-color">
            <section className="row-span-2 grid grid-cols-3 grid-rows-1 pl-3 pr-3">
                <SearchInput value={searchOrder} onChange={setSearchOrder}/>
                <StatusSelect value={status} onChange={setStatus}/>
                <CategorySelect value={category} onChange={setCategory}/>
            </section>

            <Table data={pageData} isLoading={loading} error={error} updateData={setData}/>

            <div className="pl-3 pr-3 flex items-center justify-between row-start-12 row-end-13 w-full">
                <PageArrowButton type="back" setPage={setCurrentPage} currentPage={currentPage} pagesAmount={pagesAmount}/>
                <PagesList currentPage={currentPage} setCurrentPage={setCurrentPage} pagesAmount={pagesAmount}/>
                <PageArrowButton type="forward" setPage={setCurrentPage} currentPage={currentPage} pagesAmount={pagesAmount}/>
            </div>
        </div>
    )
}

export default TablePage