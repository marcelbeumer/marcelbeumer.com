import React from 'react';
import pureRender from 'pure-render-decorator';
import autobind from 'autobind-decorator';
import refs from './refs-decorator';
import { DraggableCore } from 'react-draggable';
import StyleSheet, { px } from './styles';
import theme from './theme';

const { any, number, func } = React.PropTypes;
const { max } = Math;

export const styles = StyleSheet.create({
  root: {
    overflow: 'hidden',
  },
  content: {
    overflow: 'hidden',
    borderBottom: `1px solid ${theme.highlightColor}`,
  },
  handle: {
    cursor: 'pointer',
    width: px(60),
    height: px(15),
    margin: '0 auto',
    backgroundColor: theme.highlightColor,
    borderRadius: `0 0 ${theme.baseBorderRadius}px ${theme.baseBorderRadius}px`,
  },
  scrollbarSizer: {
    position: 'absolute',
    top: '-9999px',
    width: '100px',
    height: '100px',
    overflow: 'scroll',
  },
});

@refs
@pureRender
export default class ResizableContent extends React.Component {

  static propTypes = {
    children: any,
    height: number,
    scrollTop: number,
    onResize: func,
    onScroll: func,
  }

  static defaultProps = {
    scrollTop: 0,
    onResize: () => null,
    onScroll: () => null,
  }

  componentDidMount() {
    this._usesScrollTop = true;
    this._innerContent.style.top = 0;
    this._content.style.overflow = 'auto';
    this._content.style.marginRight = px(-this.getScrollbarWidth());
    this._content.scrollTop = this.props.scrollTop;
  }

  componentDidUpdate() {
    this._content.scrollTop = this.props.scrollTop;
  }

  @autobind
  onDrag(e, ui) {
    const { top: rootTop } = this._content.getBoundingClientRect();
    const { height: handleHeight } = this._handle.getBoundingClientRect();
    const { clientY } = ui.position;
    const value = clientY - rootTop;
    this.props.onResize(max(handleHeight, value));
  }

  @autobind
  onScroll() {
    const { scrollTop } = this._content;
    if (scrollTop !== Math.floor(this.props.scrollTop)) {
      this.props.onScroll(scrollTop);
    }
  }

  getScrollbarWidth() {
    const el = this._scrollBarSizer;
    return el.offsetWidth - el.clientWidth;
  }

  render() {
    const { height, scrollTop } = this.props;

    const contentStyle = {
      height: `${height}px`,
    };

    const innerContentStyle = {
      position: 'relative',
      top: this._usesScrollTop ? 0 : `-${scrollTop}px`,
    };

    return (
      <DraggableCore handle={`.${styles.handle}`} onDrag={this.onDrag}>
        <div className={styles.root}>
          <div className={styles.scrollbarSizer} ref={this.onRef('_scrollBarSizer')} />
          <div ref={this.onRef('_content')}
            className={styles.content}
            style={contentStyle}
            onScroll={this.onScroll}>
            <div ref={this.onRef('_innerContent')} style={innerContentStyle}>
              {this.props.children}
            </div>
          </div>
          <div className={styles.handle} ref={this.onRef('_handle')} />
        </div>
      </DraggableCore>
    );
  }
}
