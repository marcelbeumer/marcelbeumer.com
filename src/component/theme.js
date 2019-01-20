// @flow
import StyleSheet from './styles';

const theme = {
  backgroundColor: '#fefefe',
  foregroundColor: '#333333',
  textColor: '#333333',
  gutter: 10,
  media: {
    smallSize: '@media screen and (min-width: 400px)',
    midSize: '@media screen and (min-width: 600px)',
    fullSize: '@media screen and (min-width: 768px)'
  }
};

// Workaround to force media queries to proper order
StyleSheet.create({
  __: Object.keys(theme.media).reduce((p, c, i) => {
    const rules = p;
    rules[theme.media[c]] = { fontSize: i };
    return rules;
  }, {})
});

export default theme;
