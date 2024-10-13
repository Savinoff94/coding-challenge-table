import classNames from "classnames"

export const TableRow = ({children = null, additionalClass = ''}) => {
    return (
        <tr className={classNames('border-b-2 border-lighter-main-color border-collapse', additionalClass)}>
            {
                children
            }
        </tr >
    )
}
