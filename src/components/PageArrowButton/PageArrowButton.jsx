import classNames from "classnames"
import { ArrowLeft, ArrowRight } from "../Icons/Arrows"

const buttonTypes = {
    forward: 'forward',
    back: 'back'
}

const PageArrowButton = ({type='back', setPage, currentPage, pagesAmount}) => {

    const isBackButton = buttonTypes.back === type;

    const handleNextPageClick = () => {
        const increment = type === buttonTypes.back ? -1 : 1;
        setPage((prev) => {return prev + increment})
    }

    const isDisabled = isBackButton ? currentPage === 0 : currentPage === (pagesAmount-1);

    return (
        <button disabled={isDisabled} onClick={handleNextPageClick} className={classNames('flex justify-center items-center')}>
            {
                isBackButton && <ArrowLeft/>
            }
            {
                isBackButton ? 'Previous' : 'Next'
            }
            {
                !isBackButton && <ArrowRight/>
            }
        </button>
    )
}

export default PageArrowButton