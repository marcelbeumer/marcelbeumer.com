import React from 'react';
import { range } from 'lodash';
import { List } from 'immutable';
import pureRender from 'pure-render-decorator';
import autobind from 'autobind-decorator';
import ImmutablePropTypes from 'react-immutable-proptypes';
import SiteLogo from './site-logo';
import SpeechBubble from './speech-bubble';
import JavaScriptIcon from './javascript-icon';
import ReactIcon from './react-icon';
import GithubIcon from './github-icon';
import TwitterIcon from './twitter-icon';
import LinkedinIcon from './linkedin-icon';
import Slider from './slider';
import SliderGrippy from './slider-grippy';
import BarMeter, { BarMeterItem } from './bar-meter';
import ItemList from './item-list';
import ResizableContent from './resizable-content';
import styles from './home-screen-styles';

const { number, object } = React.PropTypes;
const { recordOf } = ImmutablePropTypes;

@pureRender
export default class HomeScreen extends React.Component {

  static propTypes = {
    actions: object,
    list: recordOf({
      length: number,
      start: number,
      end: number,
    }),
  }

  @autobind
  onStartChange(value) {
    const { actions, list } = this.props;
    actions.setListStart(value * list.length);
  }

  @autobind
  onEndChange(value) {
    const { actions, list } = this.props;
    actions.setListEnd(value * list.length);
  }

  @autobind
  onListResize(height) {
    const { actions, list } = this.props;
    const itemHeight = ItemList.defaultProps.itemHeight;
    actions.setListEnd(list.start + (height / itemHeight));
  }

  @autobind
  onListScroll(scrollTop) {
    const { actions, list } = this.props;
    const itemHeight = ItemList.defaultProps.itemHeight;
    const items = list.end - list.start;
    const start = scrollTop / itemHeight;
    const end = start + items;
    actions.setListRange(start, end);
  }

  render() {
    const { list } = this.props;
    const length = list.length;
    const startRatio = list.start / list.length;
    const endRatio = list.end / list.length;

    const listItems = new List(range(length).map(num => String(num)));
    const itemHeight = ItemList.defaultProps.itemHeight;
    const listHeight = ((endRatio - startRatio) * length) * itemHeight;
    const scrollTop = list.start * itemHeight;

    return (
      <div className={styles.root}>
        <div className={styles.logoContainer}>
          <div className={styles.speechBubble}>
            <SpeechBubble />
            <span className={styles.speechText}>ik ben</span>
          </div>
          <div className={styles.siteLogo}>
            <SiteLogo />
            Marcel Beumer
          </div>
        </div>
        <div className={styles.iam}>
          I'm a freelancer and I love
        </div>
        <a className={styles.javaScriptIcon}
          href="https://developer.mozilla.org/docs/Web/JavaScript"
          alt="JavaScript"
          target="_blank">
          <JavaScriptIcon />
        </a>
        <a className={styles.reactIcon}
          href="https://facebook.github.io/react"
          alt="React"
          target="_blank">
          <ReactIcon />
        </a>

        <div className={styles.widgets}>
          <BarMeter>
            <BarMeterItem value={startRatio} onChange={this.onStartChange} />
            <BarMeterItem value={endRatio} onChange={this.onEndChange} />
          </BarMeter>
          <Slider>
            <SliderGrippy value={startRatio} onChange={this.onStartChange} />
            <SliderGrippy value={endRatio} onChange={this.onEndChange} />
          </Slider>
          <ResizableContent
            height={listHeight}
            scrollTop={scrollTop}
            onResize={this.onListResize}
            onScroll={this.onListScroll}>
            <ItemList items={listItems} />
          </ResizableContent>
        </div>

        <div className={styles.websites}>
          <a className={styles.githubIcon}
            href="https://github.com/marcelbeumer"
            alt="Github"
            target="_blank">
            <GithubIcon />
          </a>

          <a className={styles.twitterIcon}
            href="https://twitter.com/marcelbeumer"
            alt="Twitter"
            target="_blank">
            <TwitterIcon />
          </a>

          <a className={styles.linkedinIcon}
            href="https://linkedin.com/in/marcelbeumer"
            alt="LinkedIn"
            target="_blank">
            <LinkedinIcon />
          </a>
        </div>

        <div className={styles.contact}>
          I’m based in Munich and looking for projects in Munich and Amsterdam.
          <a className={styles.mailto}
            href="mailto:marcel@marcelbeumer.com">
            marcel@marcelbeumer.com
          </a>
        </div>
      </div>
    );
  }
}
