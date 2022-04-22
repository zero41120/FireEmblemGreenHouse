import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';
import { seedTable } from '../data/seeds';

export type SeedSelectorProp = {
  onSelect: (seed: string) => void;
};
export const SeedSelector = (prop: SeedSelectorProp) => {
  const options = React.useMemo(() => Object.keys(seedTable), []);
  const [seed, setSeed] = React.useState<string>('None');
  const handleChange = (event: SelectChangeEvent) => {
    setSeed(event.target.value);
    prop.onSelect(event.target.value);
  };
  const title = `Seed`;
  return (
    <FormControl fullWidth>
      <InputLabel id="seed-selector-label">{title}</InputLabel>
      <Select
        labelId="seed-selector-label"
        label={title}
        value={seed}
        sx={{ fontFamily: 'monospace' }}
        onChange={handleChange}
      >
        <MenuItem value="None">None</MenuItem>
        {options.map((option) => (
          <MenuItem key={option} value={option} sx={{ fontFamily: 'monospace', whiteSpace: 'pre' }}>
            {`${seedTable[option].statBoost.effect} | ${option} ${'★'.repeat(seedTable[option].grade)}`}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
