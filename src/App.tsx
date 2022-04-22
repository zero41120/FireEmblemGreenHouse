import { Container, CssBaseline, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import './App.css';
import { CultivationSelector } from './component/cultivation-selector';
import { SeedSelector } from './component/seed-selector';
import { YieldDisplay } from './component/yield-display';
import { SeedName } from './data/seeds';
import { gardenService, YieldMetadata } from './service/garden-service';
import { ItemChance } from './type/common';

function App() {
  const [score, setScore] = React.useState(0);
  const [yieldItem, setYieldItem] = React.useState<YieldMetadata>({
    items: { good: [], bad: [] },
    yieldNumber: 0,
    goodYieldCount: 0,
    statBoosts: {} as ItemChance,
  });
  useEffect(() => {
    gardenService.onStateChange((state) => {
      console.log(state);
      const newScore = gardenService.calculateScore();
      setScore(newScore);
      setYieldItem(gardenService.getItemByScore(newScore));
    }, []);
  }, []);

  const handleSelectSeed = (seed: SeedName, index: number) => {
    console.log(`Seed ${index} selected: ${seed}`);
    gardenService.selectSeed(seed, index);
  };
  const handleCultivationSelect = (tier: number) => {
    console.log(`Cultivation selected: ${tier}`);
    gardenService.setCultivation(tier);
  };
  return (
    <Container>
      <CssBaseline />
      <Grid container spacing={1} mt={1}>
        <Grid item xs={12} md={3}>
          <Stack spacing={2}>
            <Typography variant="h4">Score: {score}</Typography>
            <Typography variant="h5">{`Expect number of item: ${yieldItem.yieldNumber}`}</Typography>
            {Array.from(new Array(5)).map((_, i) => (
              <SeedSelector key={i} onSelect={(seed: any) => handleSelectSeed(seed, i)} />
            ))}
            <CultivationSelector onSelect={handleCultivationSelect} />
            <Typography variant="caption">
              * Higher Cultivation produces more item and increase stat-boost item chance
            </Typography>
            <Typography variant="caption">* Higher Seed grade increases stat-boost item chance</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={9}>
          <YieldDisplay {...yieldItem}></YieldDisplay>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
