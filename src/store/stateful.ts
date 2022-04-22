import { Store } from './store';

export class Stateful<Type> {
  store: Store<Type>;

  constructor(initialState: Type) {
    this.store = new Store<Type>(initialState);
  }

  getState(): Type {
    const result = this.store.get();
    return result;
  }

  onStateChange(handler: (...arg0: Type[]) => void, props: (keyof Type)[] = []): void {
    this.store.onChange(handler, props);
  }

  setState(newState: Partial<Type>) {
    this.store.set({ ...newState });
  }
}
