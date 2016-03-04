import React from 'react';
import pureRender from 'pure-render-decorator';
import StyleSheet from './styles';
import theme from './theme';
import cx from 'classnames';

const { string } = React.PropTypes;

export const styles = StyleSheet.create({
  button: {
    display: 'inline-block',
    color: theme.inverseTextColor,
    backgroundColor: theme.highlightColor,
    padding: '5px 12px',
    borderRadius: theme.baseBorderRadius,
    cursor: 'pointer',
  },
  buttonInverse: {
    color: theme.textColor,
    backgroundColor: theme.backgroundColor,
  },
});

@pureRender
export default class Button extends React.Component {
  static propTypes = {
    className: string,
    type: string,
  };

  render() {
    const { type, className } = this.props;
    const classes = cx({
      [styles.button]: true,
      [styles.buttonInverse]: type === 'inverse',
    }, className);
    return (
      <div {...this.props} className={classes} />
    );
  }
}
