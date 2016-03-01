import React from 'react';
import { List } from 'immutable';
import color from 'color';
import ImmutablePropTypes from 'react-immutable-proptypes';
import pureRender from 'pure-render-decorator';
import StyleSheet from './styles';
import theme from './theme';

const { number, func } = React.PropTypes;
const { listOf, recordOf } = ImmutablePropTypes;
const barColor = theme.highlightColor;

export const styles = StyleSheet.create({
  root: {
    padding: '10px',
    cursor: 'hand',
  },
  bar: {
    height: '1em',
    backgroundColor: barColor,
    transition: '1s ease-in',
    borderRadius: '2px',
    margin: '0 0 5px 0',
  },
});

@pureRender
export default class BarMeter extends React.Component {

  static propTypes = {
    bars: listOf(recordOf({
      value: number,
      shade: number,
    })),
    onClick: func,
  }

  static defaultProps = {
    bars: new List(),
  }

  renderBars() {
    const { bars } = this.props;
    return bars.map(({ value, shade }, i) => {
      const perc = value * 100;
      const label = `${Math.round(perc)}%`;
      return (
        <div className={styles.item} key={`bar-${i}`}>
          <div className={styles.bar} style={{
            transform: `translateX(-50%) scaleX(${value}) translateX(50%)`,
            backgroundColor: color(barColor).darken(shade / 2).rgbString(),
          }}>
          </div>
        </div>
      );
    });
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
