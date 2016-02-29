import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import pureRender from 'pure-render-decorator';
import { memoize } from 'lodash';
import DotPlotter from './dot-plotter';
import BarMeter from './bar-meter';
import Slider from './slider';
import SliderGrippy from './slider-grippy';
import Logo from './logo';
import SpeechBubble from './speech-bubble';
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
        <div className={styles.logo}>
          <div className={styles.speechBubble}>
            <SpeechBubble />
            <span className={styles.speechText}>ich bin</span>
          </div>
          <Logo />
          <div className={styles.iam}>
            I'm a freelancer and I love
          </div>
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
