import React, { useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'

type Props = {
  title: string
  options: any[]
  displayKey: string
  onChange: Function
}
const DropdownSelector: React.FC<Props> = ({ title, options, displayKey, onChange }) => {
  const [selectedValue, setSelectedValue] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value as string)
    console.log(event)
    onChange(event.target.value)
  }

  return (
    <FormControl fullWidth sx={{ margin: '5px' }}>
      <InputLabel id="dropdown-label">{title}</InputLabel>
      <Select labelId="dropdown-label" value={selectedValue} label="Select Option" onChange={handleChange}>
        {options.map(o => (
          <MenuItem key={o.id} value={o.id}>
            {o[displayKey]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default DropdownSelector
