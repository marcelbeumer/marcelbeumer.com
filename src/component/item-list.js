import React from 'react';
import { List } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import pureRender from 'pure-render-decorator';
import StyleSheet, { px } from './styles';
import theme from './theme';

const { number, string, func } = React.PropTypes;
const { listOf } = ImmutablePropTypes;

export const styles = StyleSheet.create({
  root: {
  },
  item: {
    backgroundColor: theme.highlightColor,
    color: theme.inverseTextColor,
    borderRadius: px(theme.baseBorderRadius),
  },
});

@pureRender
export default class ItemList extends React.Component {

  static propTypes = {
    items: listOf(string),
    itemHeight: number,
    itemMargin: number,
    unitFn: func,
  }

  static defaultProps = {
    items: new List(),
    itemHeight: 60,
    unitFn: px,
  }

  renderItems() {
    const { unitFn, items, itemHeight } = this.props;
    const itemStyle = {
      height: unitFn(itemHeight),
      lineHeight: unitFn(itemHeight),
    };
    return items.map((value, i) =>
      <div className={styles.item} style={itemStyle} key={`item-${i}`}>
        {value}
      </div>
    );
  }

  render() {
    return (
      <div className={styles.root}>
        {this.renderItems()}
      </div>
    );
  }
}
