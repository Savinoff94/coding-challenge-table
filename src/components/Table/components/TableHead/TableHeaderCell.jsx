import classNames from "classnames"

const TableHeaderCell = ({children = null, thAdditionalClass = '', divAdditionalClass = ''}) => {
    return (
        <th className={classNames('px-4 py-2', thAdditionalClass)}>
            <div className={classNames('flex justify-start gap-2 items-center', divAdditionalClass)}>
                {children}
            </div>
        </th>
    )
}

export default TableHeaderCell