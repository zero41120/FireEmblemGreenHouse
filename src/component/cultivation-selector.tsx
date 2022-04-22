import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import { Cultivation } from '../data/cultivation';

export type CultivationSelectorProp = {
  onSelect: (tier: number) => void;
};

export const CultivationSelector = (prop: CultivationSelectorProp) => {
  const [selected, setSelected] = React.useState(Cultivation.None);
  const handleChange = (event: any) => {
    setSelected(event.target.value);
    prop.onSelect(event.target.value);
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="cultivation-selector-label">Cultivation</InputLabel>
      <Select labelId="cultivation-selector-label" label="Cultivation" value={selected} onChange={handleChange}>
        {Object.keys(Cultivation).map((cultivation, i) => (
          <MenuItem key={i} value={Cultivation.get(cultivation)}>
            {cultivation}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
