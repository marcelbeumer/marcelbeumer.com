import express from 'express';
import createDebug from 'debug';

const debug = createDebug('server');
debug('starting server');

const app = express();
let renderHomepage;

export function reload(initial) {
  if (!initial) {
    const base = '/Users/marcel/dev/clone/marcelbeumer.com/src';
    Object.keys(require.cache).forEach((key) => {
      if (key.indexOf(base) === 0) {
        delete require.cache[key];
      }
    });
  }
  try {
    renderHomepage = require('./render-homepage').default;
  } catch (e) {
    console.error(e);
  }
  if (!initial) console.log('reloaded');
}

reload(true);

// export const reload = hotreload(`${__dirname}/..`, () => {
//   renderHomepage = require('./render-homepage').default;
// });

// reload({ initial: true });

app.get('/', (req, res) => {
  res.send(renderHomepage());
});

app.use(express.static('dist'));

export default app;
