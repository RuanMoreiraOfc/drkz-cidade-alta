export { sessionReducer };
export type { State as SessionState, Action as SessionAction };

type State = {
  username: string | null;
};

type Action =
  | {
      type: 'LOGIN';
      payload: { [K in keyof State]: NonNullable<State[K]> };
    }
  | {
      type: 'LOGOUT';
      payload?: never;
    };

const INITIAL_SESSION_STATE = {
  username: sessionStorage.getItem('username') ?? null,
};

function sessionReducer(oldState = INITIAL_SESSION_STATE, action: Action) {
  switch (action.type) {
    case 'LOGIN': {
      const username = action.payload.username;

      sessionStorage.setItem('username', username);
      return { username };
    }
    case 'LOGOUT': {
      sessionStorage.removeItem('username');

      return { username: null };
    }
    default: {
      return oldState;
    }
  }
}
