/* eslint new-cap:0 */
import { Record } from 'immutable';

const TreeData = Record({
});

TreeData.fromServerData = data => {
  const values = Object.assign({}, data);
  return TreeData(values);
};

TreeData.prototype.toServerData = function () {
  return this.toJSON();
};

export default TreeData;
