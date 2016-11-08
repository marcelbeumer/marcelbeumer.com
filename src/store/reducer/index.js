// @flow
import AppState from '../../data/AppState';
import screenReducer from './screen';

export default function reducer(state: AppState, action: Object = {}): AppState {
  return [
    screenReducer,
  ].reduce((lastState, currentReducer) =>
    currentReducer(lastState, action), state);
}
