import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import pureRender from 'pure-render-decorator';
import { memoize } from 'lodash';
import DotPlotter from './dot-plotter';
import BarMeter from './bar-meter';
import Slider from './slider';
import SliderGrippy from './slider-grippy';
import ResizableContent from './resizable-content';

const { object, number } = React.PropTypes;
const { list } = ImmutablePropTypes;

@pureRender
export default class HomeScreen extends React.Component {

  static propTypes = {
    actions: object,
    dots: list,
    bars: list,
    sliders: list,
    resizableContentHeight: number,
  }

  createGrippyChangeHandler = memoize(index => value => {
    const { updateSliders } = this.props.actions;
    updateSliders(index, value);
  });

  renderGrippies() {
    return this.props.sliders.map((value, i) =>
      <SliderGrippy key={`slider-${i}`} value={value}
        onChange={this.createGrippyChangeHandler(i)}/>).toArray();
  }

  renderSlider() {
    return <Slider>{this.renderGrippies()}</Slider>;
  }

  render() {
    const { actions, dots, bars, sliders, resizableContentHeight } = this.props;

    return (
      <div className="home-screen">
        <div className="home-screen--thin-header-bar">.</div>

        <div className="home-screen--hero">
          <div className="home-screen--primary-controls">
            <DotPlotter dots={dots} onClick={actions.generateDots}/>
            {this.renderSlider()}
          </div>

          <div className="home-screen--title">
            this is a React starter kit
          </div>

          <div className="home-screen--secondary-controls">
            <Slider values={sliders} onChange={actions.updateSliders}/>
            <BarMeter bars={bars} onClick={actions.generateBars}/>
            <ResizableContent height={resizableContentHeight}
              onResize={actions.setResizableContentHeight}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor invidunt ut labore et
              dolore magna aliquyam erat, sed diam voluptua. At vero
              eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem
              ipsum dolor sit amet. Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet...
            </ResizableContent>
          </div>
        </div>

        <div className="home-screen--profile">...</div>
        <div className="home-screen--details">...</div>
        <div className="home-screen--websites">....</div>
      </div>
    );
  }
}