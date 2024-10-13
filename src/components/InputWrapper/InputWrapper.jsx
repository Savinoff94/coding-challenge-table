const InputWrapper = ({children = null, labelText = '', htmlFor = ''}) => {
    return (
        <div className="flex flex-col justify-center items-start gap-1 m-1 w-full pl-3 pr-3" >
            <label className="" htmlFor={htmlFor}>
                {labelText}
            </label>
            <div className="flex gap-1 border-solid border-main-color border-2 rounded-lg h-1/3 w-full">
                {children}
            </div>
        </div>
    )
}

export default InputWrapper;