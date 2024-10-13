import TableDataCell from "../TableDataCell";

const UserCell = ({url, name, email}) => {
    return (
        <TableDataCell>
        <figure className="flex gap-2 items-center cursor-pointer">
            <img className="rounded-full h-fit" width='30' height='30' src={url} alt={`${name} avatar`}/>
            <figcaption>
                <div className="text-black">{name}</div>
                <div>{email}</div>
            </figcaption>
        </figure>
        </TableDataCell>
    )
}

export default UserCell;