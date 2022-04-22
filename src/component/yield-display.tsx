import { Box, Stack, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import { Yield } from '../data/seeds';
import { ItemChance } from '../type/common';

export type YieldDisplayProps = {
  items: Yield;
  yieldNumber: number;
  goodYieldCount: number;
  statBoosts: ItemChance;
};

export const YieldDisplay = (prop: YieldDisplayProps) => {
  const { good, bad } = prop.items;
  const badYieldCount = prop.yieldNumber - prop.goodYieldCount;
  const goodItemChance = prop.goodYieldCount / good.length;
  const badItemChance = badYieldCount / bad.length;
  const chanceReducer = (baselineChance: number) => {
    return (acc: any, item: string) => {
      if (acc[item] == null) acc[item] = 0;
      acc[item] += baselineChance;
      return acc;
    };
  };
  const goodItemTable: ItemChance = good.reduce(chanceReducer(goodItemChance), {} as ItemChance);
  const badItemTable: ItemChance = bad.reduce(chanceReducer(badItemChance), {} as ItemChance);
  const mergedTable = {} as ItemChance;
  Object.keys(goodItemTable).forEach((key) => (mergedTable[key] = goodItemTable[key]));
  Object.keys(badItemTable).forEach((key) => {
    if (!mergedTable[key]) mergedTable[key] = 0;
    mergedTable[key] += badItemTable[key];
  });

  const columns = [
    { field: 'chance', headerName: 'Yield', width: 80 },
    { field: 'name', headerName: 'Item', flex: 1 },
  ];
  const itemRows = [
    ...Object.keys(mergedTable).map((key, i) => ({ id: i, name: key, chance: mergedTable[key].toFixed(2) })),
  ];
  const boostRow = [
    ...Object.keys(prop.statBoosts).map((key, i) => ({
      id: i,
      name: key,
      chance: prop.statBoosts[key].toFixed(0) + '%',
    })),
  ];

  return (
    <>
      <Stack height={750}>
        <Typography variant="h6">{`Stat Boost Items`}</Typography>
        <Box height={225}>
          <DataGrid
            sx={{ fontFamily: 'monospace', whiteSpace: 'pre!important' }}
            density="compact"
            rows={boostRow}
            columns={columns}
            pageSize={5}
            hideFooter
          ></DataGrid>
        </Box>
        <Typography variant="h6">{`Items`}</Typography>
        <DataGrid density="compact" rows={itemRows} columns={columns} pageSize={15}></DataGrid>
      </Stack>
    </>
  );
};
