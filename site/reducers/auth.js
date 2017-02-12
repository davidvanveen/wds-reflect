import C from '~/constants';
import { Map } from 'immutable';
import _ from 'lodash';

export default function auth(state = Map, action) {
  switch (action.type) {
    case C.AUTH_SET_ME:
      return state.withMutations((ctx) => {
        ctx.set('me', _.clone(action.me));
        ctx.set('error', false);
        ctx.set('status', 'ready');
        ctx.set('checked', true);
        return ctx;
      });

    case C.AUTH_LOGOUT:
      return state.withMutations((ctx) => {
        ctx.set('me', false);
        ctx.set('error', false);
        ctx.set('status', 'ready');
        return ctx;
      });

    case C.AUTH_SET_CARD:
      return state.withMutations((ctx) => {
        ctx.set('card', action.card);
        ctx.set('useExistingCard', action.existing);
        return ctx;
      });

    case C.AUTH_SET_USE_EXISTING_CARD:
      return state.set('useExistingCard', action.existing);

    case C.AUTH_SET_USERNAME_STATUS:
      return state.set('usernameStatus', action.usernameStatus);

    case C.AUTH_SET_STATUS:
      return state.withMutations((ctx) => {
        ctx.set('status', action.status);
        ctx.set('error', false);
        return ctx;
      });

    case C.AUTH_SET_ERROR:
      return state.withMutations((ctx) => {
        ctx.set('status', 'error');
        ctx.set('error', action.error);
        return ctx;
      });
    default:
      return state;
  }
}
