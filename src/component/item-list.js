import React from 'react';
import { List } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import pureRender from 'pure-render-decorator';
import StyleSheet, { px } from './styles';
import theme from './theme';

const { number, string } = React.PropTypes;
const { listOf } = ImmutablePropTypes;
const itemMargin = 2;

export const styles = StyleSheet.create({
  root: {
  },
  item: {
    margin: `0 0 ${itemMargin}px 0`,
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
  }

  static defaultProps = {
    items: new List(),
    itemHeight: 60,
  }

  getItemHeight() {
    return this.props.itemHeight - itemMargin;
  }

  renderItems() {
    const { items } = this.props;
    const itemStyle = {
      height: px(this.getItemHeight()),
    };
    return items.map((value, i) =>
      <div className={styles.item} style={itemStyle} key={`item-${i}`}>
        {value}
      </div>
    );
  }

  render() {
    const rootStyle = {
      lineHeight: px(this.getItemHeight()),
    };

    return (
      <div className={styles.root} style={rootStyle}>
        {this.renderItems()}
      </div>
    );
  }
}
