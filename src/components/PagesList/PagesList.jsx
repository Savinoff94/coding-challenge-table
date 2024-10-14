import { getIntegersArray } from "../../functions/helpers"
import { useState } from "react"
import classNames from "classnames"

const PagesList = ({setCurrentPage, pagesAmount, currentPage}) => {
    
    return (
        <div className="flex gap-6 text-base">
            {getIntegersArray(pagesAmount).map((pageNumber) => {
                const buttonText = fillButtonText(pageNumber, currentPage, pagesAmount)
                return (
                buttonText && 
                    (<button
                    className={classNames('w-6 h-6', {'bg-main-color  rounded-full': currentPage === pageNumber })}
                    key={`page${pageNumber}`} 
                    onClick={() => {setCurrentPage(pageNumber)}}
                >
                    {buttonText}
                </button>)
                )
            })}
        </div>
    )
}

function fillButtonText (pageNumberDrawn, currentPage, pagesAmount) {

    if (
        pageNumberDrawn === 0 || 
        pageNumberDrawn === pagesAmount - 1 || 
        Math.abs(pageNumberDrawn - currentPage) <= 2
    ) {
        return pageNumberDrawn + 1;
    }
    
    if (
        pageNumberDrawn === currentPage - 3 || 
        pageNumberDrawn === currentPage + 3
    ) {
        return '...';
    }

    return null;
}


export default PagesList;