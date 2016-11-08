// @flow
import React from 'react';
import StyleSheet from '../styles';

export const styles = StyleSheet.create({
  link: {
    textDecoration: 'none',
  },
});

const Link = (props: Object) => <a className={styles.link} {...props} />;

export default Link;
