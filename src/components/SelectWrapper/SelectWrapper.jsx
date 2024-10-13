import Select from "react-select";

const dot = (color = 'transparent') => ({
    alignItems: 'center',
    display: 'flex',
  
    ':before': {
      backgroundColor: color,
      borderRadius: 10,
      content: '" "',
      display: 'block',
      marginRight: 8,
      height: 10,
      width: 10,
    },
  });

const SelectWrapper = ({value='', onChange, id, options=[], isDotted = false}) => {
    const style = {
        control: (baseStyles) => ({
            ...baseStyles,
            border: 'none',
            boxShadow: 'none'
        }),
    }

    if(isDotted) {
        style['input'] = (styles) => ({ ...styles, ...dot() })
        style['placeholder'] = (styles) => ({ ...styles, ...dot('#ccc') })
        style['singleValue'] = (styles, { data }) => ({ ...styles, ...dot(data.color) })
        style['option'] = (styles, { data }) => ({ ...styles, ...dot(data.color) })
    }
    
    return (
        <Select
            id={id}
            value={value}
            onChange={onChange}
            options={options}
            className="w-full pl-2"
            styles={{...style}}
            components={{
                IndicatorSeparator: () => null
            }}
        />
    )
}

export default SelectWrapper;