/* eslint no-nested-ternary:0 */

function setListRange(start, end, state) {
  let list = state.list;
  if (isNaN(start)) debugger;
  list = list.set('start', start);
  list = list.set('end', end);
  return state.set('list', list);
}

export default function reducer(state, action = {}) {
  const { type, payload } = action;
  return type === 'SET_LIST_SIZE' ? state.setIn(['list', 'size'], payload) :
    type === 'SET_LIST_START' ? state.setIn(['list', 'start'], payload) :
    type === 'SET_LIST_END' ? state.setIn(['list', 'end'], payload) :
    type === 'SET_LIST_RANGE' ? setListRange(payload.start, payload.end, state) :
    state;
}
