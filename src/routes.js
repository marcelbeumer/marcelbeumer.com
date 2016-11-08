// @flow
import {createRoute} from './router/Router';

const routes = (routeServices: Object): Object => {
  const setScreen = ({name}) => {
    routeServices.setScreen(name);
  };

  return {
    home: createRoute('/', setScreen),
  };
};

export default routes;
