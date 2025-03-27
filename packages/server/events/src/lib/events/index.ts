export type Event<Name extends EventName> = {
  type: Name;
  payload: EventPayload<Name>;
};

export type EventName = keyof typeof events;

export type EventPayload<T extends EventName> = (typeof events)[T];

export const events = {
  'user:created': {},
  'user:updated': {},
  'user:deleted': {},
  'user:logged-in': {},
  'user:logged-out': {},
  'user:password-reset': {},
  'user:password-reset-requested': {},
  'admin:user-invited': {},
  'admin:user-blocked': {},
  'folder:created': {},
  'file:created': {},
  'file:linked': {},
  'organization:created': {},
  'portfolio:created': {},
  'deal:created': {},
  'deal:updated': {},
};

export const eventNames = Object.keys(events) as EventName[];
