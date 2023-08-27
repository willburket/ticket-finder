import React, {useState, useEffect} from "react";
import Select from "react-select";

function DistanceDropdown({handleCallback}) {
    const [selected, setSelected] = useState("")

    useEffect(() =>{
        handleCallback(selected)
    }, [selected])

    const options = [
        {value: 402.336, label: "0.25 Miles"},
        {value: 804.672, label: "0.5 Miles"},
        {value: 1609.34, label: "1 Mile"},
        {value: 8046.72, label: "5 Miles"},
        {value: 16093.4, label: "10 Miles"},
        {value: 40233.6, label: "25 Miles"},
        {value: 80467.2, label: "50 Miles"},
    ]

    const customStyles = {
        control: (provided) => ({
          ...provided,
          minHeight: '40px', // Change the minimum height to 40px
          width: '175px',
        }),
        dropdownIndicator: (provided) => ({
          ...provided,
          padding: '8px', // Adjust padding for indicator to match the height
        }),
      };

    const handleSelectChange = (target) => {
        setSelected(target)
    }

    return (
        <div className="p-1">
        <Select 
            options = {options}
            value = {selected}
            onChange= {handleSelectChange}
            placeholder = "Max Distance"
            styles={customStyles}/>
        </div>
    )
}


export default DistanceDropdown;