import React from 'react';
import pureRender from 'pure-render-decorator';
import theme from './theme';

const viewBox = '0 0 165 128';
const path = [
  'M71.0029172,109.757812',
  'L110.633886,109.757812',
  'C110.633886,109.757812',
  '115.528393,110.600046',
  '148.409544,126.559482',
  'C164.576645,134.406465',
  '134.463727,101.023635',
  '142.500301,93.0688603',
  'C154.317981,81.3714642',
  '164.576645,66.8401946',
  '164.576645,59.9384079',
  'C164.576645,26.8353393',
  '127.734908,0',
  '82.2883226,0',
  'C36.841737,0',
  '0,26.8353393',
  '0,59.9384079',
  'C0,93.0414764',
  '25.5563315,109.757812',
  '71.0029172,109.757812',
  'Z',
];

@pureRender
export default class SpeechBubble extends React.Component {
  render() {
    return (
      <svg viewBox={viewBox}>
        <path d={path.join(' ')} fill={theme.textColor} />
      </svg>
    );
  }
}

