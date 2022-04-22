export type SeedName =
  | 'Mixed Herb Seeds'
  | 'Western Fodlan Seeds'
  | 'Root Vegetable Seeds'
  | 'Vegetable Seeds'
  | 'Northern Fodlan Seeds'
  | 'Morfis-Plum Seeds'
  | 'Southern Fodlan Seeds'
  | 'Morfis Seeds'
  | 'Nordsalat Seeds'
  | 'Boa-Fruit Seeds'
  | 'Albinean Seeds'
  | 'Eastern Fodlan Seeds'
  | 'Angelica Seeds'
  | 'Mixed Fruit Seeds'
  | 'Red Flower Seeds'
  | 'White Flower Seeds'
  | 'Blue Flower Seeds'
  | 'Purple Flower Seeds'
  | 'Yellow Flower Seeds'
  | 'Green Flower Seeds'
  | 'Pale-Blue Flower Seeds';

export type Yield = {
  bad: string[];
  good: string[];
};

export type StatBoost = {
  effect: string;
  name: string;
};

export type Seed = {
  rank: number;
  yield1: Yield;
  yield2: Yield;
  yield3: Yield;
  grade: number;
  statBoost: StatBoost;
};
export type SeedTable = {
  [key: string]: Seed;
};

export const seedTable: SeedTable = {
  'Mixed Herb Seeds': {
    grade: 1,
    rank: 27,
    statBoost: { effect: 'STR', name: 'STR - Rocky Burdock' },
    yield1: {
      bad: ['Weeds', 'Weeds', 'Onion', 'Mixed Herb Seeds', 'Mixed Herb Seeds'],
      good: ['Mixed Herb Seeds', 'Mixed Herb Seeds', 'Turnip', 'Cabbage', 'Peach Currant'],
    },
    yield2: {
      bad: ['Mixed Herb Seeds', 'Albinean Berries', 'Turnip', 'Turnip', 'Mixed Fruit Seeds'],
      good: ['Mixed Herb Seeds', 'Peach Currant', 'Turnip', 'Yellow Flower Seeds', 'Mixed Fruit Seeds'],
    },
    yield3: {
      bad: ['Mixed Herb Seeds', 'Carrot', 'Northern Fodlan Seeds', 'Chickpeas', 'Cabbage'],
      good: ['Western Fodlan Seeds', 'Tomato', 'Northern Fodlan Seeds', 'Daffodil', 'Chickpeas'],
    },
  },
  'Western Fodlan Seeds': {
    grade: 1,
    rank: 9,
    statBoost: { effect: 'HP ', name: 'HP  - Fruit of Life' },
    yield1: {
      bad: ['Zanado Fruit', 'Zanado Fruit', 'Carrot', 'Western Fodlan Seeds', 'Western Fodlan Seeds'],
      good: ['Western Fodlan Seeds', 'Noa Fruit', 'Chickpeas', 'Cabbage', 'Root Vegetable Seeds'],
    },
    yield2: {
      bad: ['Western Fodlan Seeds', 'Noa Fruit', 'Noa Fruit', 'Peach Currant', 'Vegetable Seeds'],
      good: ['Western Fodlan Seeds', 'Noa Fruit', 'Tomato', 'Green Flower Seeds', 'Albinean Berries'],
    },
    yield3: {
      bad: ['Western Fodlan Seeds', 'Noa Fruit', 'Southern Fodlan Seeds', 'Blue Flower Seeds', 'Carrot'],
      good: ['Root Vegetable Seeds', 'Noa Fruit', 'Southern Fodlan Seeds', 'Sunflower', 'Onion'],
    },
  },
  'Root Vegetable Seeds': {
    grade: 1,
    statBoost: { effect: 'DEF', name: 'DEF - Ambrosia' },
    rank: 49,
    yield1: {
      bad: ['Weeds', 'Weeds', 'Chickpeas', 'Root Vegetable Seeds', 'Root Vegetable Seeds'],
      good: ['Root Vegetable Seeds', 'Albinean Berries', 'Tomato', 'Cabbage', 'Cabbage'],
    },
    yield2: {
      bad: ['Root Vegetable Seeds', 'Carrot', 'Cabbage', 'Peach Currant', 'Northern Fodlan Seeds'],
      good: ['Root Vegetable Seeds', 'Noa Fruit', 'Cabbage', 'Pale-Blue Flower Seeds', 'Northern Fodlan Seeds'],
    },
    yield3: {
      bad: ['Root Vegetable Seeds', 'Tomato', 'Morfis Seeds', 'Purple Flower Seeds', 'Chickpeas'],
      good: ['Blue Flower Seeds', 'Peach Currant', 'Morfis Seeds', 'Violet', 'Turnip'],
    },
  },
  'Vegetable Seeds': {
    grade: 1,
    statBoost: { effect: 'RES', name: 'RES - White Verona' },
    rank: 33,
    yield1: {
      bad: ['Dried Vegetables', 'Dried Vegetables', 'Chickpeas', 'Vegetable Seeds', 'Vegetable Seeds'],
      good: ['Dried Vegetables', 'Chickpeas', 'Onion', 'Peach Currant', 'Turnip'],
    },
    yield2: {
      bad: ['Vegetable Seeds', 'Onion', 'Tomato', 'Turnip', 'Mixed Herb Seeds'],
      good: ['Vegetable Seeds', 'Peach Currant', 'Onion', 'Purple Flower Seeds', 'Noa Fruit'],
    },
    yield3: {
      bad: ['Noa Fruit', 'Onion', 'Albinean Seeds', 'Magdred Kirsch', 'Carrot'],
      good: ['Nordsalat Seeds', 'Verona', 'Albinean Seeds', 'Lily of the Valley', 'Onion'],
    },
  },
  'Northern Fodlan Seeds': {
    rank: 53,
    statBoost: { effect: 'CHA', name: 'CHA - Golden Apple' },
    yield1: {
      bad: ['Dried Vegetables', 'Dried Vegetables', 'Onion', 'Northern Fodlan Seeds', 'Northern Fodlan Seeds'],
      good: ['Northern Fodlan Seeds', 'Tomato', 'Chickpeas', 'Mixed Fruit Seeds', 'Mixed Fruit Seeds'],
    },
    yield2: {
      bad: ['Northern Fodlan Seeds', 'Carrot', 'Noa Fruit', 'Mixed Fruit Seeds', 'Root Vegetable Seeds'],
      good: ['Northern Fodlan Seeds', 'Peach Currant', 'Noa Fruit', 'Yellow Flower Seeds', 'Albinean Berries'],
    },
    yield3: {
      bad: ['Northern Fodlan Seeds', 'Morfis Plum', 'Morfis Seeds', 'White Flower Seeds', 'Chickpeas'],
      good: ['Southern Fodlan Seeds', 'Chickpeas', 'Morfis Seeds', 'Rose', 'Turnip'],
    },
    grade: 2,
  },
  'Morfis-Plum Seeds': {
    rank: 18,
    statBoost: { effect: 'DEX', name: 'DEX - Ailell Pomegranate' },
    yield1: {
      bad: ['Zanado Fruit', 'Zanado Fruit', 'Peach Currant', 'Noa Fruit', 'Morfis-Plum Seeds'],
      good: ['Zanado Fruit', 'Morfis-Plum Seeds', 'Morfis Plum', 'Morfis Plum', 'Peach Currant'],
    },
    yield2: {
      bad: ['Morfis-Plum Seeds', 'Peach Currant', 'Noa Fruit', 'Morfis Plum', 'Morfis Plum'],
      good: ['Morfis-Plum Seeds', 'Tomato', 'Morfis Plum', 'Morfis Plum', 'Albinean Seeds'],
    },
    yield3: {
      bad: ['Morfis Plum', 'Morfis Plum', 'Eastern Fodlan Seeds', 'Purple Flower Seeds', 'Turnip'],
      good: ['Nordsalat Seeds', 'Magdred Kirsch', 'Eastern Fodlan Seeds', 'Forget-me-nots', 'Zanado Treasure Fruit'],
    },
    grade: 4,
  },
  'Southern Fodlan Seeds': {
    rank: 37,
    statBoost: { effect: 'MAG', name: 'MAG - Premium Magic Herbs' },
    yield1: {
      bad: ['Weeds', 'Weeds', 'Carrot', 'Southern Fodlan Seeds', 'Southern Fodlan Seeds'],
      good: ['Southern Fodlan Seeds', 'Turnip', 'Peach Currant', 'Cabbage', 'Western Fodlan Seeds'],
    },
    yield2: {
      bad: ['Southern Fodlan Seeds', 'Turnip', 'Cabbage', 'Peach Currant', 'Northern Fodlan Seeds'],
      good: ['Southern Fodlan Seeds', 'Turnip', 'Verona', 'Red Flower Seeds', 'Magdred Kirsch'],
    },
    yield3: {
      bad: ['Southern Fodlan Seeds', 'Turnip', 'Morfis Plum', 'Yellow Flower Seeds', 'Magdred Kirsch'],
      good: ['Verona', 'Peach Currant', 'Morfis Plum', 'Baby’s Breath', 'Chickpeas'],
    },
    grade: 2,
  },
  'Morfis Seeds': {
    rank: 23,
    statBoost: { effect: 'DEX', name: 'DEX - Ailell Pomegranate' },
    yield1: {
      bad: ['Weeds', 'Weeds', 'Turnip', 'Morfis Seeds', 'Turnip'],
      good: ['Morfis Seeds', 'Morfis Seeds', 'Carrot', 'Turnip', 'Mixed Fruit Seeds'],
    },
    yield2: {
      bad: ['Morfis Seeds', 'Morfis Seeds', 'Peach Currant', 'Chickpeas', 'Vegetable Seeds'],
      good: ['Morfis Seeds', 'Carrot', 'Turnip', 'White Flower Seeds', 'Vegetable Seeds'],
    },
    yield3: {
      bad: ['Morfis Seeds', 'Albinean Berries', 'Tomato', 'Green Flower Seeds', 'Peach Currant'],
      good: ['Magdred Kirsch', 'Carrot', 'Tomato', 'Anemone', 'Onion'],
    },
    grade: 3,
  },
  'Nordsalat Seeds': {
    rank: 3,
    statBoost: { effect: 'SPD', name: 'SPD - Speed Carrot' },
    yield1: {
      bad: ['Dried Vegetables', 'Verona', 'Carrot', 'Nordsalat Seeds', 'Nordsalat Seeds'],
      good: ['Dried Vegetables', 'Nordsalat Seeds', 'Chickpeas', 'Nordsalat', 'Nordsalat'],
    },
    yield2: {
      bad: ['Nordsalat Seeds', 'Carrot', 'Nordsalat', 'Nordsalat', 'Nordsalat'],
      good: ['Nordsalat Seeds', 'Nordsalat', 'Magdred Kirsch', 'Verona', 'Albinean Berries'],
    },
    yield3: {
      bad: ['Nordsalat', 'Nordsalat', 'Angelica Seeds', 'Pale-Blue Flower Seeds', 'Magdred Kirsch'],
      good: ['Ailell Grass', 'Angelica', 'Angelica Seeds', 'Daffodil', 'Turnip'],
    },
    grade: 4,
  },
  'Boa-Fruit Seeds': {
    rank: 31,
    statBoost: { effect: 'LCK', name: 'LCK - Miracle Bean' },
    yield1: {
      bad: ['Weeds', 'Weeds', 'Peach Currant', 'Boa-Fruit Seeds', 'Boa-Fruit Seeds'],
      good: ['Weeds', 'Boa-Fruit Seeds', 'Boa Fruit', 'Boa Fruit', 'Boa Fruit'],
    },
    yield2: {
      bad: ['Boa-Fruit Seeds', 'Peach Currant', 'Boa Fruit', 'Boa Fruit', 'Boa Fruit'],
      good: ['Boa-Fruit Seeds', 'Boa Fruit', 'Boa Fruit', 'Boa Fruit', 'Angelica Seeds'],
    },
    yield3: {
      bad: ['Boa Fruit', 'Boa Fruit', 'Zanado Treasure Fruit', 'Red Flower Seeds', 'Onion'],
      good: ['Angelica Seeds', 'Zanado Treasure Fruit', 'Mixed Herb Seeds', 'Sunflower', 'Cabbage'],
    },
    grade: 5,
  },
  'Albinean Seeds': {
    rank: 20,
    statBoost: { effect: 'CHA', name: 'CHA - Golden Apple' },
    yield1: {
      bad: ['Zanado Fruit', 'Zanado Fruit', 'Peach Currant', 'Albinean Seeds', 'Albinean Seeds'],
      good: ['Albinean Seeds', 'Chickpeas', 'Peach Currant', 'Albinean Berries', 'Mixed Fruit Seeds'],
    },
    yield2: {
      bad: ['Albinean Seeds', 'Albinean Seeds', 'Peach Currant', 'Albinean Berries', 'Root Vegetable Seeds'],
      good: ['Albinean Seeds', 'Carrot', 'Peach Currant', 'Yellow Flower Seeds', 'Root Vegetable Seeds'],
    },
    yield3: {
      bad: ['Albinean Seeds', 'Carrot', 'Tomato', 'White Flower Seeds', 'Turnip'],
      good: ['Albinean Berries', 'Chickpeas', 'Tomato', 'Violet', 'Carrot'],
    },
    grade: 2,
  },
  'Eastern Fodlan Seeds': {
    grade: 2,
    statBoost: { effect: 'DEF', name: 'DEF - Ambrosia' },
    rank: 42,
    yield1: {
      bad: ['Weeds', 'Weeds', 'Tomato', 'Eastern Fodlan Seeds', 'Eastern Fodlan Seeds'],
      good: ['Eastern Fodlan Seeds', 'Verona', 'Onion', 'Peach Currant', 'Onion'],
    },
    yield2: {
      bad: ['Eastern Fodlan Seeds', 'Eastern Fodlan Seeds', 'Onion', 'Onion', 'Morfis Seeds'],
      good: ['Eastern Fodlan Seeds', 'Peach Currant', 'Onion', 'Green Flower Seeds', 'Morfis Seeds'],
    },
    yield3: {
      bad: ['Eastern Fodlan Seeds', 'Tomato', 'Nordsalat Seeds', 'Blue Flower Seeds', 'Cabbage'],
      good: ['Albinean Berries', 'Verona', 'Nordsalat', 'Pitcher Plant', 'Chickpeas'],
    },
  },
  'Angelica Seeds': {
    rank: 34,
    statBoost: { effect: 'STR', name: 'STR - Rocky Burdock' },
    yield1: {
      bad: ['Weeds', 'Weeds', 'Tomato', 'Angelica Seeds', 'Angelica Seeds'],
      good: ['Weeds', 'Angelica Seeds', 'Angelica', 'Nordsalat', 'Angelica'],
    },
    yield2: {
      bad: ['Angelica Seeds', 'Angelica', 'Magdred Kirsch', 'Angelica', 'Angelica'],
      good: ['Angelica Seeds', 'Angelica', 'Angelica', 'Angelica', 'Morfis-Plum Seeds'],
    },
    yield3: {
      bad: ['Angelica', 'Angelica', 'Ailell Grass', 'Yellow Flower Seeds', 'Chickpeas'],
      good: ['Boa-Fruit Seeds', 'Ailell Grass', 'Western Fodlan Seeds', 'Lily', 'Turnip'],
    },
    grade: 5,
  },
  'Mixed Fruit Seeds': {
    rank: 44,
    statBoost: { effect: 'LCK', name: 'LCK - Miracle Bean' },
    yield1: {
      bad: ['Zanado Fruit', 'Zanado Fruit', 'Peach Currant', 'Mixed Fruit Seeds', 'Mixed Fruit Seeds'],
      good: [
        'Mixed Fruit Seeds',
        'Northern Fodlan Seeds',
        'Northern Fodlan Seeds',
        'Peach Currant',
        'Root Vegetable Seeds',
      ],
    },
    yield2: {
      bad: ['Mixed Fruit Seeds', 'Northern Fodlan Seeds', 'Peach Currant', 'Albinean Berries', 'Root Vegetable Seeds'],
      good: ['Mixed Fruit Seeds', 'Northern Fodlan Seeds', 'Peach Currant', 'White Flower Seeds', 'Morfis Plum'],
    },
    yield3: {
      bad: ['Mixed Fruit Seeds', 'Northern Fodlan Seeds', 'Eastern Fodlan Seeds', 'Green Flower Seeds', 'Onion'],
      good: ['Northern Fodlan Seeds', 'Noa Fruit', 'Eastern Fodlan Seeds', 'Lily of the Valley', 'Cabbage'],
    },
    grade: 1,
  },
  'Red Flower Seeds': {
    rank: 24,
    statBoost: { effect: 'RES', name: 'RES - White Verona' },
    yield1: {
      bad: ['Weeds', 'Weeds', 'Weeds', 'Carnation', 'Red Flower Seeds'],
      good: ['Weeds', 'Red Flower Seeds', 'Yellow Flower Seeds', 'Rose', 'Carnation'],
    },
    yield2: {
      bad: ['Rose', 'Rose', 'Carnation', 'Lily', 'White Flower Seeds'],
      good: ['Daffodil', 'Lavender', 'Yellow Flower Seeds', 'Purple Flower Seeds', 'Blue Flower Seeds'],
    },
    yield3: {
      bad: ['Daffodil', 'Onion', 'Blue Flower Seeds', 'Albinean Seeds', 'Rose'],
      good: ['Rose', 'Mixed Herb Seeds', 'Albinean Seeds', 'Nordsalat', 'Magdred Kirsch'],
    },
    grade: 3,
  },
  'White Flower Seeds': {
    rank: 5,
    statBoost: { effect: 'CHA', name: 'CHA - Golden Apple' },
    yield1: {
      bad: ['Weeds', 'Weeds', 'Weeds', 'Baby’s Breath', 'White Flower Seeds'],
      good: ['Weeds', 'White Flower Seeds', 'Green Flower Seeds', 'Daffodil', 'Baby’s Breath'],
    },
    yield2: {
      bad: ['Daffodil', 'Baby’s Breath', 'Lily', 'Lily of the Valley', 'Blue Flower Seeds'],
      good: ['Sunflower', 'Anemone', 'Green Flower Seeds', 'Yellow Flower Seeds', 'Purple Flower Seeds'],
    },
    yield3: {
      bad: ['Sunflower', 'Southern Fodlan Seeds', 'Purple Flower Seeds', 'Turnip', 'Daffodil'],
      good: ['Daffodil', 'Vegetable Seeds', 'Western Fodlan Seeds', 'Morfis-Plum Seeds', 'Boa Fruit'],
    },
    grade: 3,
  },
  'Blue Flower Seeds': {
    rank: 38,
    statBoost: { effect: 'HP ', name: 'HP  - Fruit of Life' },
    yield1: {
      bad: ['Weeds', 'Weeds', 'Weeds', 'Forget-me-nots', 'Blue Flower Seeds'],
      good: ['Weeds', 'Blue Flower Seeds', 'Pale-Blue Flower Seeds', 'Anemone', 'Forget-me-nots'],
    },
    yield2: {
      bad: ['Forget-me-nots', 'Forget-me-nots', 'Anemone', 'Rose', 'Purple Flower Seeds'],
      good: ['Violet', 'Lily of the Valley', 'Pale-Blue Flower Seeds', 'Green Flower Seeds', 'Yellow Flower Seeds'],
    },
    yield3: {
      bad: ['Violet', 'Chickpeas', 'Yellow Flower Seeds', 'Eastern Fodlan Seeds', 'Forget-me-nots'],
      good: ['Forget-me-nots', 'Root Vegetable Seeds', 'Eastern Fodlan Seeds', 'Morfis-Plum Seeds', 'Nordsalat'],
    },
    grade: 3,
  },
  'Purple Flower Seeds': {
    rank: 16,
    statBoost: { effect: 'STR', name: 'STR - Rocky Burdock' },
    yield1: {
      bad: ['Weeds', 'Weeds', 'Weeds', 'Lavender', 'Purple Flower Seeds'],
      good: ['Weeds', 'Purple Flower Seeds', 'Red Flower Seeds', 'Violet', 'Lavender'],
    },
    yield2: {
      bad: ['Violet', 'Rose', 'Lavender', 'Forget-me-nots', 'Yellow Flower Seeds'],
      good: ['Pitcher Plant', 'Baby’s Breath', 'Red Flower Seeds', 'Pale-Blue Flower Seeds', 'Green Flower Seeds'],
    },
    yield3: {
      bad: ['Pitcher Plant', 'Cabbage', 'Green Flower Seeds', 'Mixed Herb Seeds', 'Violet'],
      good: ['Lavender', 'Western Fodlan Seeds', 'Morfis Seeds', 'Eastern Fodlan Seeds', 'Albinean Berries'],
    },
    grade: 3,
  },
  'Yellow Flower Seeds': {
    rank: 55,
    statBoost: { effect: 'MAG', name: 'MAG - Premium Magic Herbs' },
    yield1: {
      bad: ['Weeds', 'Weeds', 'Weeds', 'Sunflower', 'Yellow Flower Seeds'],
      good: ['Weeds', 'Yellow Flower Seeds', 'White Flower Seeds', 'Sunflower', 'Sunflower'],
    },
    yield2: {
      bad: ['Sunflower', 'Anemone', 'Daffodil', 'Lily', 'Green Flower Seeds'],
      good: ['Carnation', 'Rose', 'White Flower Seeds', 'Red Flower Seeds', 'Pale-Blue Flower Seeds'],
    },
    yield3: {
      bad: ['Carnation', 'Morfis Seeds', 'Pale-Blue Flower Seeds', 'Onion', 'Sunflower'],
      good: ['Sunflower', 'Northern Fodlan Seeds', 'Southern Fodlan Seeds', 'Boa-Fruit Seeds', 'Mixed Fruit Seeds'],
    },
    grade: 3,
  },
  'Green Flower Seeds': {
    rank: 10,
    statBoost: { effect: 'DEX', name: 'DEX - Ailell Pomegranate' },
    yield1: {
      bad: ['Weeds', 'Weeds', 'Weeds', 'Pitcher Plant', 'Green Flower Seeds'],
      good: ['Weeds', 'Green Flower Seeds', 'Blue Flower Seeds', 'Pitcher Plant', 'Pitcher Plant'],
    },
    yield2: {
      bad: ['Pitcher Plant', 'Pitcher Plant', 'Rose', 'Rose', 'Pale-Blue Flower Seeds'],
      good: ['Lily', 'Violet', 'Blue Flower Seeds', 'White Flower Seeds', 'Red Flower Seeds'],
    },
    yield3: {
      bad: ['Lily', 'Zanado Fruit', 'Red Flower Seeds', 'Cabbage', 'Pitcher Plant'],
      good: ['Pitcher Plant', 'Root Vegetable Seeds', 'Eastern Fodlan Seeds', 'Tomato', 'Morfis Plum'],
    },
    grade: 3,
  },
  'Pale-Blue Flower Seeds': {
    rank: 1,
    statBoost: { effect: 'SPD', name: 'SPD - Speed Carrot' },
    yield1: {
      bad: ['Weeds', 'Weeds', 'Weeds', 'Carnation', 'Pale-Blue Flower Seeds'],
      good: ['Weeds', 'Pale-Blue Flower Seeds', 'Purple Flower Seeds', 'Carnation', 'Carnation'],
    },
    yield2: {
      bad: ['Anemone', 'Anemone', 'Forget-me-nots', 'Rose', 'Red Flower Seeds'],
      good: ['Lily of the Valley', 'Pitcher Plant', 'Purple Flower Seeds', 'Blue Flower Seeds', 'White Flower Seeds'],
    },
    yield3: {
      bad: ['Lily of the Valley', 'Northern Fodlan Seeds', 'White Flower Seeds', 'Turnip', 'Anemone'],
      good: ['Forget-me-nots', 'Mixed Fruit Seeds', 'Northern Fodlan Seeds', 'Tomato', 'Verona'],
    },
    grade: 3,
  },
};
