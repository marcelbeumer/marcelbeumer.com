/* eslint new-cap:0 */
import { Record } from 'immutable';
import ListData from './list';

const TreeData = Record({
  list: new ListData({
    length: 200,
    start: 0,
    end: 3.5,
  }),
});

TreeData.fromServerData = data => {
  const values = Object.assign({}, data);
  if (values.list) values.list = new ListData(values.list);
  return TreeData(values);
};

TreeData.prototype.toServerData = function () {
  return this.toJSON();
};

export default TreeData;
