// @flow
import StyleSheet from './styles';

const theme = {
  fontFamily: 'Helvetica, sans-serif',
  fontWeight: '100',
  backgroundColor: '#FF4542',
  foregroundColor: '#D41C1C',
  textColor: '#BA1818',
  media: {
    biggerPhones: '@media screen and (min-width: 360px)',
    fromTablet: '@media screen and (min-width: 600px)',
    fromDesktop: '@media screen and (min-width: 800px)',
  },
};

// Workaround to force media queries to proper order
StyleSheet.create({
  __: Object.keys(theme.media).reduce((p, c, i) => {
    const rules = p;
    rules[theme.media[c]] = {fontSize: i};
    return rules;
  }, {}),
});

export default theme;
