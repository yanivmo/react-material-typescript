import React from 'react';
import { injectIntl, InjectedIntl } from 'react-intl';
import { Switch, Route } from 'react-router-dom';

import routes from './routes';

/**
 * Indicates how the ActiveRoute component will render.
 *
 * Content mode will render the whole page component.
 * Title mode will render just the page title text using
 * the active language.
 */
type ActiveRouteRenderType = 'content' | 'title';
interface ActiveRouteProps {
  render: ActiveRouteRenderType;
  intl: InjectedIntl;
}

/**
 * Renders the active route.
 */
const ActiveRoute: React.FC<ActiveRouteProps> = ({ render, intl }) => {
  const routeElements = Object.values(routes).map(route => {
    let component: React.ComponentType;
    if (render === 'content') {
      component = route.content;
    } else {
      component = () => (
        <React.Fragment>{intl.formatMessage(route.titleMsg)}</React.Fragment>
      );
    }
    return (
      <Route exact={route.exact} path={route.path} component={component} />
    );
  });

  return <Switch>{routeElements}</Switch>;
};

export default injectIntl(ActiveRoute);
