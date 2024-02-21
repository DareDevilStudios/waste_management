import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function BasicSelect({ data, Vehicle, handleChangeOfInputData }) {
  console.log('dataset', Vehicle)

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Vehicle</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={Vehicle}
          label='Vehicle'
          onChange={handleChangeOfInputData}
        >
          {data.map(vehicle => {
            return <MenuItem value={vehicle.id}>{vehicle.name}</MenuItem>
          })}
        </Select>
      </FormControl>
    </Box>
  )
}
