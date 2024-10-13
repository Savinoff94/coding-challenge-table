const Checkbox = ({isChecked=false, handleCheckboxChange = () => {}}) => {
    
    return (
        <input
        className="border-gray-300 h-4 w-4 cursor-pointer focus:ring-blue-400"
        type="checkbox"
        checked={isChecked} 
        onChange={(e) => handleCheckboxChange(e.target.value)} 
    />)
}

export default Checkbox;