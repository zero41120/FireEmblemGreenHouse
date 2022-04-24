import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';
import { seedTable } from '../data/seeds';
import { ItemChance } from '../type/common';

export type SeedSelectorProp = {
  triggerReset: boolean;
  suggestion?: ItemChance;
  onSelect: (seed: string) => void;
};
export const SeedSelector = (prop: SeedSelectorProp) => {
  const options = React.useMemo(() => Object.keys(seedTable), []);
  const [seed, setSeed] = React.useState<string>('None');
  const handleChange = (event: SelectChangeEvent) => {
    setSeed(event.target.value);
    prop.onSelect(event.target.value);
  };

  if (prop.triggerReset && seed !== 'None') setSeed('None');

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
        {options.map((option) => {
          const score = prop?.suggestion?.[option] ?? '';
          return (
            <MenuItem key={option} value={option} sx={{ fontFamily: 'monospace', whiteSpace: 'pre' }}>
              {`${score} ${seedTable[option].statBoost.effect} | ${option} ${'★'.repeat(seedTable[option].grade)}`}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
