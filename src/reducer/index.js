export default function reducer(state, action = {}) {
  return [
    //
  ].reduce((lastState, currentReducer) =>
    currentReducer(lastState, action), state);
}
