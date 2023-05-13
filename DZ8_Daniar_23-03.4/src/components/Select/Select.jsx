import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const CustomSelect = ({ list, value, onChange, label }) => {
  const elements = list.map((item) => (
    <MenuItem key={item} value={item}>
      {item}
    </MenuItem>
  ));

  return (
    <FormControl fullWidth sx={{ mb: '20px', borderColor: '#cacaca' }}>
      <InputLabel id="select" sx={{ color: '#cacaca' }}>
        {label}
      </InputLabel>
      <Select
        sx={{ borderBottom: '1px solid #cacaca', borderRadius: '3px', color: '#cacaca' }}
        labelId="select"
        id="select-1"
        value={value}
        label={label}
        onChange={onChange}
      >
        {elements}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
