import { StateEvent } from './event';
// @ts-ignore
import structuredClone from '@ungap/structured-clone';

export class Store<State> {
  state: State;
  initialState: State;
  events: StateEvent<State>;

  constructor(initialState: State) {
    this.initialState = initialState;
    this.state = { ...this.initialState };
    this.events = new StateEvent<State>();
  }

  get(): State {
    return structuredClone(this.state);
  }

  set(newState: Partial<State>) {
    const changedStateProps: (keyof State)[] = [];
    const oldState = this.get();

    for (const key in newState) {
      if (newState[key] !== oldState[key]) {
        changedStateProps.push(key as keyof State);
      }
    }

    if (changedStateProps.length > 0) {
      this.state = { ...this.state };
      changedStateProps.forEach((prop) => (this.state[prop] = newState[prop] as any));
      this.events.trigger([...(changedStateProps as string[]), '*'], this.get(), oldState);
    }
  }

  onChange(handler: (...args: State[]) => void, props: (keyof State)[] = []): void {
    if (props.length === 0) this.events.subscribe('*', handler);
    props.forEach((prop) => this.events.subscribe(prop as string, handler));
  }
}
