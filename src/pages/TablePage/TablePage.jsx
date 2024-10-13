import SearchInput from "../../components/SearchInput/SearchInput"
import {StatusSelect, options as statusSelectOptions} from "../../components/StatusSelect/StatusSelect"
import {CategorySelect, options as categorySelectOptions} from '../../components/CategorySelect/CategorySelect'

import { useState } from "react"




const TablePage = () => {
    const [searchOrder, setSearchOrder] = useState('')
    const [status, setStatus] = useState(statusSelectOptions[0]);
    const [category, setCategory] = useState(categorySelectOptions[0])

    return (
        <div className="h-full w-full grid grid-cols-1 grid-rows-12">
            <section className="row-span-2 grid grid-cols-3 grid-rows-1 pl-3 pr-3">
                <SearchInput value={searchOrder} onChange={setSearchOrder}/>
                <StatusSelect value={status} onChange={setStatus}/>
                <CategorySelect value={category} onChange={setCategory}/>
            </section>


            <section className="row-start-12 row-end-13">

            </section>
        </div>
    )
}

export default TablePage