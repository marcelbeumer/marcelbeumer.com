// @flow
/* eslint new-cap:0 */
import {Record} from 'immutable';

const AppState = Record({
  screen: null,
});

AppState.fromServerData = (data: Object) => {
  return new AppState(data);
};

Object.assign(AppState.prototype, {
  toServerData(): Object {
    return this.toJSON();
  },
});

export default AppState;
