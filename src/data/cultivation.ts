export class Cultivation {
  static 'None' = 0;
  static 'Infuse with magic' = 1;
  static 'Pour Airmid water' = 2;
  static 'Prune' = 3;
  static 'Scatter Bonemeal' = 4;
  static 'Use Calcedonian soil' = 5;
  static 'Spread pegasus blessings' = 6;
  static get(key: string): number {
    return (Cultivation as any)[key] ?? Cultivation.None;
  }
}

export const CultivationYieldAddition = {
  [Cultivation.None]: 4,
  [Cultivation['Infuse with magic']]: 5,
  [Cultivation['Pour Airmid water']]: 6,
  [Cultivation['Prune']]: 7,
  [Cultivation['Scatter Bonemeal']]: 8,
  [Cultivation['Use Calcedonian soil']]: 9,
  [Cultivation['Spread pegasus blessings']]: 10,
};
