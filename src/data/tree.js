/* eslint new-cap:0 */
import { Record } from 'immutable';

const TreeData = Record({
  demoPageUrl: 'http://react-blueprint.marcelbeumer.com',
  githubUrl: 'https://github.com/marcelbeumer/marcelbeumer.com',
  twitterUrl: 'https://twitter.com/marcelbeumer',
  linkedinUrl: 'https://linkedin.com/in/marcelbeumer',
  mediumUrl: 'https://medium.com/@marcelbeumer',
});

TreeData.fromServerData = data => {
  const values = Object.assign({}, data);
  return TreeData(values);
};

TreeData.prototype.toServerData = function () {
  return this.toJSON();
};

export default TreeData;
