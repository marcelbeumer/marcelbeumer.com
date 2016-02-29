import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import pureRender from 'pure-render-decorator';
import { memoize } from 'lodash';
import DotPlotter from './dot-plotter';
import BarMeter from './bar-meter';
import Slider from './slider';
import SliderGrippy from './slider-grippy';
import SiteLogo from './site-logo';
import SpeechBubble from './speech-bubble';
import JavaScriptIcon from './javascript-icon';
import ReactIcon from './react-icon';
import GithubIcon from './github-icon';
import TwitterIcon from './twitter-icon';
import LinkedinIcon from './linkedin-icon';
import styles from './home-screen-styles';

const { object } = React.PropTypes;
const { list } = ImmutablePropTypes;

@pureRender
export default class HomeScreen extends React.Component {

  static propTypes = {
    actions: object,
    dots: list,
    bars: list,
    sliders: list,
  }

  createGrippyChangeHandler = memoize(index => value => {
    const { updateSliders } = this.props.actions;
    updateSliders(index, value);
  });

  renderGrippies() {
    return this.props.sliders.map((value, i) =>
      <SliderGrippy key={`slider-${i}`} value={value}
        onChange={this.createGrippyChangeHandler(i)} />).toArray();
  }

  renderSlider() {
    return <Slider>{this.renderGrippies()}</Slider>;
  }

  render() {
    const { actions, dots, bars, sliders } = this.props;

    return (
      <div className={styles.root}>
        <div className={styles.logoContainer}>
          <div className={styles.speechBubble}>
            <SpeechBubble />
            <span className={styles.speechText}>ich bin</span>
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

        <div className={styles.websites}>
          <a className={styles.githubIcon}
            href="https://github.com/marcelbeumer"
            alt="Github"
            target="_blank">
            <GithubIcon />
          </a>

          <a className={styles.twitterIcon}
            href="https://twitter.com/marcelbeumer"
            alt="Github"
            target="_blank">
            <TwitterIcon />
          </a>

          <a className={styles.linkedinIcon}
            href="https://twitter.com/marcelbeumer"
            alt="Github"
            target="_blank">
            <LinkedinIcon />
          </a>
        </div>

        {/*}
        <div className={styles.hero}>
          <div className={styles.primaryControls}>
            <DotPlotter dots={dots} onClick={actions.generateDots} />
            {this.renderSlider()}
          </div>

          <div className={styles.secondaryControls}>
            <Slider values={sliders} onChange={actions.updateSliders} />
            <BarMeter bars={bars} onClick={actions.generateBars} />
          </div>
        </div>
        {*/}
      </div>
    );
  }
}
