import { Cultivation, CultivationYieldAddition } from '../data/cultivation';
import { ScoreMetadata } from '../data/score';
import { seedTable, Seed, SeedName, SeedTable, Yield } from '../data/seeds';
import { Stateful } from '../store/stateful';
import { ItemChance } from '../type/common';

export type GardenServiceState = {
  seedTable: SeedTable;
  selectedSeeds: { [key: number]: Seed };
  cultivationTier: number;
};

export type YieldMetadata = { items: Yield; yieldNumber: number; goodYieldCount: number; statBoosts: ItemChance };

export class GardenService extends Stateful<GardenServiceState> {
  constructor(initState: GardenServiceState) {
    super(initState);
  }

  getSeed(name: SeedName) {
    return this.getState().seedTable[name];
  }

  selectSeed(seedName: SeedName, index: number) {
    const seed = this.getSeed(seedName);
    const selectedSeeds: any = this.getState().selectedSeeds;
    if (!seed) {
      delete selectedSeeds[index];
    } else {
      selectedSeeds[index] = seed;
    }
    this.setState({ selectedSeeds });
  }

  setCultivation(cultivation: Cultivation) {
    this.setState({ cultivationTier: cultivation as number });
  }

  calculateScore() {
    const seeds = Object.values(this.getState().selectedSeeds);
    if (!seeds.length) return 0;
    const cultivation = this.getState().cultivationTier;
    const rankSum = seeds.reduce((sum, seed) => sum + seed.rank, 0);
    const gradeSum = seeds.reduce((sum, seed) => sum + seed.grade, 0);
    const rankValue = (12 - (rankSum % 12)) * 5;
    const gradeValue = Math.floor((gradeSum / 5) * 4);
    const cultivationValue = (cultivation + 4) * 2;
    console.log(rankSum, gradeSum, rankValue, gradeValue, cultivationValue);
    return rankValue + gradeValue + cultivationValue;
  }

  getItemByScore(score: number): YieldMetadata {
    const { selectedSeeds, cultivationTier } = this.getState();
    const meta = ScoreMetadata.find((metadata) => {
      if (metadata.threshold < score) return metadata;
    });
    if (!meta) return { items: { bad: [], good: [] }, yieldNumber: 0, goodYieldCount: 0, statBoosts: {} as ItemChance };
    const seeds = Object.values(selectedSeeds);
    const itemCount = this.getYieldItemCount(cultivationTier, seeds.length);
    const items = this.getItemBySeeds(seeds, meta.display);
    const goodCount = Math.floor(itemCount * (1 - meta.bad));
    const statBoosts = seeds.reduce((acc, seed) => {
      const chance = meta.boostCoefficient + (seed.grade - 1) * 5 + seeds.length * 6 + cultivationTier * 5;
      acc[seed.statBoost.name] = chance;
      return acc;
    }, {} as ItemChance);
    return {
      yieldNumber: itemCount,
      goodYieldCount: goodCount,
      statBoosts,
      items,
    };
  }

  resetSelection() {
    this.setState({ selectedSeeds: {}, cultivationTier: 0 });
  }

  private getYieldItemCount(cultivationTier: number, seedNumber: number) {
    return CultivationYieldAddition[cultivationTier] + seedNumber;
  }

  private getItemBySeeds(seeds: Seed[], yieldTier: number) {
    return seeds.reduce(
      (acc, seed) => {
        const yieldTarget =
          {
            1: seed.yield1,
            2: seed.yield2,
            3: seed.yield3,
          }[yieldTier] ?? seed.yield1;
        acc.bad.push(...yieldTarget.bad);
        acc.good.push(...yieldTarget.good);
        return acc;
      },
      { good: [], bad: [] } as Yield,
    );
  }
}

export const gardenService = new GardenService({
  seedTable,
  selectedSeeds: {},
  cultivationTier: 0,
});
