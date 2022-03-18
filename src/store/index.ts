import { createStore as reduxCreateStore, combineReducers } from 'redux';

import type { SessionState, SessionAction } from '@store/reducers/session';
import { sessionReducer } from '@store/reducers/session';

export default createStore();
export type { Store, StoreState, StoreAction };

type StoreState = {
  session: SessionState;
};

type StoreAction = {
  session: SessionAction;
};

type Store = { state: StoreState } & { action: StoreAction };

function createStore() {
  const store = reduxCreateStore(
    combineReducers({
      session: sessionReducer,
    }),
  );

  return store;
}
