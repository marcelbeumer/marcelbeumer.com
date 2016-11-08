// @flow
import AppState from '../../data/AppState';

export default function screenReducer(state: AppState, action: Object = {}): AppState {
  const {type, payload} = action;
  return type === 'SET_SCREEN' ? state.set('screen', payload) :
    state;
}
