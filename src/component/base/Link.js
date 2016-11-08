// @flow
import React from 'react';
import cx from 'classnames';
import StyleSheet from '../styles';

export const styles = StyleSheet.create({
  link: {
    textDecoration: 'none',
    display: 'inline-block',
  },
});

const Link = (props: Object) => <a {...props} className={cx(styles.link, props.className)} />;

export default Link;
