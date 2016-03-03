import listReducer from './list';

export default function reducer(state, action = {}) {
  return [
    listReducer,
  ].reduce((lastState, currentReducer) =>
    currentReducer(lastState, action), state);
}
