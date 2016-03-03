import React from 'react';
import { List } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import pureRender from 'pure-render-decorator';
import StyleSheet from './styles';
import theme from './theme';

const { number, func } = React.PropTypes;
const { listOf } = ImmutablePropTypes;
const barColor = theme.highlightColor;

export const styles = StyleSheet.create({
  root: {
  },
  bar: {
    height: '1em',
    backgroundColor: barColor,
    borderRadius: '2px',
    margin: '0 0 5px 0',
  },
});

@pureRender
export default class BarMeter extends React.Component {

  static propTypes = {
    values: listOf(number),
    onClick: func,
  }

  static defaultProps = {
    values: new List(),
  }

  renderBars() {
    const { values } = this.props;
    return values.map((value, i) =>
      <div className={styles.item} key={`bar-${i}`}>
        <div className={styles.bar} style={{
          transform: `translateX(-50%) scaleX(${value}) translateX(50%)`,
          backgroundColor: barColor,
        }}>
        </div>
      </div>
    );
  }

  render() {
    const { props } = this;
    return (
      <div className={styles.root} onClick={props.onClick}>
        {this.renderBars()}
      </div>
    );
  }
}
