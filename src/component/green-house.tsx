import { Button, Grid, Link, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { ScoreMetadata } from '../data/score';
import { SeedName } from '../data/seeds';
import { gardenService, YieldMetadata } from '../service/garden-service';
import { ItemChance } from '../type/common';
import { CultivationSelector } from './cultivation-selector';
import { SeedSelector } from './seed-selector';
import { YieldDisplay } from './yield-display';

export const GreenHouse = () => {
  const [score, setScore] = React.useState(0);
  const [suggestion, setSuggestion] = React.useState<ItemChance>({});
  const [shouldReset, setShouldReset] = React.useState(false);
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
      setSuggestion(gardenService.calculateSuggestion());
    }, []);
  }, []);

  const handleSelectSeed = (seed: SeedName, index: number) => {
    setShouldReset(false);
    gardenService.selectSeed(seed, index);
  };
  const handleCultivationSelect = (tier: number) => {
    setShouldReset(false);
    gardenService.setCultivation(tier);
  };

  const resetSelection = () => {
    setShouldReset(true);
    gardenService.resetSelection();
  };

  const yieldMeta = ScoreMetadata.find((metadata) => score >= metadata.threshold);
  const herb = '🌿'.repeat(yieldMeta?.display ?? 0);

  return (
    <Grid container spacing={1} mt={1} sx={{ border: '2px solid #3c3c3c', padding: '10px' }}>
      <Grid item xs={12} md={4}>
        <Stack spacing={2}>
          <Typography variant="h4">{`Score: ${score}`}</Typography>
          <Typography variant="overline">{`Produce: ${yieldItem.yieldNumber} items ${herb}`}</Typography>
          <CultivationSelector triggerReset={shouldReset} onSelect={handleCultivationSelect} />
          {Array.from(new Array(4)).map((_, i) => (
            <SeedSelector triggerReset={shouldReset} key={i} onSelect={(seed: any) => handleSelectSeed(seed, i)} />
          ))}
          <SeedSelector
            suggestion={suggestion}
            triggerReset={shouldReset}
            onSelect={(seed: any) => handleSelectSeed(seed, 4)}
          />
          <Button variant="outlined" onClick={resetSelection}>
            Reset
          </Button>
          <Typography variant="caption">
            * Higher Cultivation produces more item and increase stat-boost item chance
          </Typography>
          <Typography variant="caption">* Higher Seed grade increases stat-boost item chance</Typography>
          <Link variant="caption" href="https://serenesforest.net/three-houses/monastery/greenhouse/">
            Calculation Explanation
          </Link>
        </Stack>
      </Grid>
      <Grid item xs={12} md={8}>
        <YieldDisplay {...yieldItem}></YieldDisplay>
      </Grid>
    </Grid>
  );
};
