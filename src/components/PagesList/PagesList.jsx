import { getIntegersArray } from "../../functions/helpers"

const PagesList = ({setCurrentPage, pagesAmount}) => {
    return (
        <div className="flex gap-2">
            {getIntegersArray(pagesAmount).map((pageNumber) => {
                return <button key={`page${pageNumber}`} onClick={() => {setCurrentPage(pageNumber)}}>{pageNumber+1}</button>
            })}
        </div>
    )
}

export default PagesList;