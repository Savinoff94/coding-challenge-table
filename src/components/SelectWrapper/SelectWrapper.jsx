import Select from "react-select";
import { darkerMainColor } from "../../styles/constants";

const SelectWrapper = ({onChange, id, value='', options=[], isDotted = false}) => {
    const style = {
        control: (baseStyles) => ({
            ...baseStyles,
            border: 'none',
            boxShadow: 'none',
            color:'#' + darkerMainColor
        }),
        singleValue: (styles) => ({
            ...styles,
            color:'#' + darkerMainColor
        })
    }

    if(isDotted) {
        style['input'] = (styles) => ({ ...styles, ...dot() })
        style['placeholder'] = (styles) => ({ ...styles, ...dot('#ccc') })
        style['singleValue'] = (styles, { data }) => ({ ...styles, color:'#' + darkerMainColor, ...dot(data.color) })
        style['option'] = (styles, { data }) => ({ ...styles, ...dot(data.color) })
    }
    
    return (
        <Select
            id={id}
            value={value}
            onChange={onChange}
            options={options}
            className="w-full pl-2 text-darker-main-color"
            styles={{...style}}
            components={{
                IndicatorSeparator: () => null
            }}
        />
    )
}

const dot = (color = 'transparent', size = 10) => ({
    alignItems: 'center',
    display: 'flex',
  
    ':before': {
      backgroundColor: color,
      borderRadius: size,
      content: '" "',
      display: 'block',
      marginRight: 8,
      height: size,
      width: size,
    },
});

export default SelectWrapper;