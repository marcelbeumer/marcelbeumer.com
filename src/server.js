import express from 'express';
import createDebug from 'debug';
import settings from '../settings/server';
import createRenderer from './renderer/server';
import DataTree from './data/tree';
import createRedux from './redux';
import fs from 'fs';

const debug = createDebug('server');
debug('starting server');

const template = String(fs.readFileSync(`${__dirname}/../dist/index.html`));
const renderer = createRenderer(settings);
const app = express();

const injectData = (output, data) =>
  output.replace(/(id=(['"]?)data\2>)/, `$1${JSON.stringify(data)}`);

const injectRender = (output, render) =>
  output.replace(/(id=(['"]?)root\2>)/, `$1${render}`);

app.get('/', (req, res) => {
  const initialState = new DataTree();
  const { actions } = createRedux(initialState);
  const rendered = renderer(initialState, actions);
  const html = injectRender(injectData(template, initialState), rendered);
  res.send(html);
});

app.use(express.static('dist'));

export default app;