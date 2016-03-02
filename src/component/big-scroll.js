import React from 'react';
// import color from 'color';
// import ImmutablePropTypes from 'react-immutable-proptypes';
import pureRender from 'pure-render-decorator';
import autobind from 'autobind-decorator';
import StyleSheet from './styles';
// import theme from './theme';

const { number } = React.PropTypes;
// const { listOf, recordOf } = ImmutablePropTypes;

export const styles = StyleSheet.create({
  root: {
    position: 'relative',
    overflow: 'hidden',
  },
  spacerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: '-20px',
    height: '100%',
    overflowY: 'scroll',
    '-webkit-overflow-scrolling': 'touch',
  },
  itemContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  item: {
    backgroundColor: '#000',
    border: '2px solid #fff',
    color: '#fff',
  },
});

@pureRender
export default class BigScroll extends React.Component {

  static propTypes = {
    containerHeight: number,
    listSize: number,
    itemSize: number,
  }

  static defaultProps = {
    containerHeight: 300,
    listSize: 200,
    itemSize: 75,
  }

  state = {
    scrollTop: 0,
  };

  @autobind
  onScroll() {
    const scrollTop = this._scroller.scrollTop;
    this.setState({ scrollTop });
  }

  @autobind
  onScrollerRef(el) {
    this._scroller = el;
  }

  @autobind
  onItemClick() {
    console.log('item clicked');
  }

  getItemRenderCount() {
    const { props } = this;
    const { itemSize, containerHeight } = props;
    return Math.ceil(containerHeight / itemSize) * 2;
  }

  renderItemContent(num) {
    return <span>{num}</span>;
  }

  renderItems(start) {
    const { itemSize } = this.props;
    const fitInView = this.getItemRenderCount();
    const items = [];
    const itemStyle = {
      height: `${itemSize}px`,
      lineHeight: `${itemSize}px`,
    };

    let current = start + 1;
    for (let x = 0; x < fitInView; x++) {
      const item = (
        <div key={`item-${x}`} className={styles.item} style={itemStyle}
          onClick={this.onItemClick}>
          <span>{current}</span>
        </div>
      );
      items.push(item);
      current++;
    }
    return items;
  }

  render() {
    const { listSize, itemSize, containerHeight } = this.props;
    const { scrollTop } = this.state;

    const rootStyle = {
      height: `${containerHeight}px`,
    };

    const spacerStyle = {
      height: `${listSize * itemSize}px`,
    };

    const page = scrollTop / containerHeight;
    const inside = page - Math.floor(page);
    const offset = inside * containerHeight;

    const itemContainerStyle = {
      transform: `translateY(${-offset}px)`,
    };

    const itemsPerPage = containerHeight / itemSize;
    const start = Math.floor(page) * itemsPerPage;

    return (
      <div className={styles.root}
        style={rootStyle}
        ref={this.onRootRef}>
        <div className={styles.itemContainer} style={itemContainerStyle}>
          {this.renderItems(start)}
        </div>
        <div className={styles.spacerContainer} onScroll={this.onScroll} ref={this.onScrollerRef}>
          <div className={styles.spacer} style={spacerStyle} />
        </div>
      </div>
    );
  }
}
