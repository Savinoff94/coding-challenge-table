import { integersArray } from "../../functions/helpers"

const PagesList = ({setCurrentPage, pagesAmount}) => {
    return (
        <div className="flex gap-2">
            {integersArray(pagesAmount).map((pageNumber) => {
                {console.log(pageNumber)}
                return <button key={`page${pageNumber}`} onClick={() => {setCurrentPage(pageNumber)}}>{pageNumber+1}</button>
            })}
        </div>
    )
}

export default PagesList;