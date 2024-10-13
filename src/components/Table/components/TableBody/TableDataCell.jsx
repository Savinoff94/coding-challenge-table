import classNames from "classnames"

const TableDataCell = ({children = null, thAdditionalClass = '', divAdditionalClass = ''}) => {
    return (
        <td className={classNames('px-4 py-2', thAdditionalClass)}>
            <div className={classNames('flex justify-start gap-2 items-center', divAdditionalClass)}>
                {children}
            </div>
        </td>
    )
}

export default TableDataCell