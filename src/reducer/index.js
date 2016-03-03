/* eslint no-nested-ternary:0 */
export default function reducer(state, action = {}) {
  const { type, payload } = action;
  return type === 'SET_LIST_SIZE' ? state.setIn(['list', 'size'], payload) :
    type === 'SET_LIST_START' ? state.setIn(['list', 'start'], payload) :
    type === 'SET_LIST_END' ? state.setIn(['list', 'end'], payload) :
    state;
}
