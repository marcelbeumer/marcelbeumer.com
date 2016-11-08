// @flow
import React from 'react';
import StyleSheet from '../styles';
import theme from '../theme';

export const styles = StyleSheet.create({
  root: {
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeight,
    fontSize: '16px',
    lineHeight: '20px',
    textAlign: 'center',
  },
});

const App = () => (
  <div className={styles.root}>
    Hello
  </div>
);

export default App;
