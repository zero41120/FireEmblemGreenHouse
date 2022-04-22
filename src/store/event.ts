type Handler<Payload> = (...arg0: Payload[]) => void;

export class StateEvent<Payload> {
  handlers: { [key: string]: Handler<Payload>[] } = {};

  subscribe(event: string, handler: Handler<Payload>) {
    if (!this.handlers[event]) {
      this.handlers[event] = [];
    }
    this.handlers[event].push(handler);

    return () => {
      this.unsubscribe(event, handler);
    };
  }

  unsubscribe(event: string, handler: Handler<Payload>): void {
    if (!this.handlers[event]) {
      return;
    }

    const index = this.handlers[event].indexOf(handler);
    if (index !== -1) {
      this.handlers[event].splice(index, 1);
    }
    if (this.handlers[event].length === 0) {
      delete this.handlers[event];
    }
  }

  unsubscribeAll(): void {
    this.handlers = {};
  }

  trigger(event: string[], ...payload: Payload[]): void {
    event.forEach((event) => {
      if (!this.handlers[event]) return;
      this.handlers[event].forEach((handler) => handler(...payload));
    });
  }
}
