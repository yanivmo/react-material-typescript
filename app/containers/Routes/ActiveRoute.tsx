import * as React from 'react';
import { injectIntl, InjectedIntl, FormattedMessage } from 'react-intl';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import messages from './messages';

type IntlMsgDesc = FormattedMessage.MessageDescriptor;

interface RouteDescription {
  titleMsg: IntlMsgDesc;
  content: React.ComponentType;
  path: string;
  exact: boolean;
}

const topLevelRoutes: { [k: string]: RouteDescription } = {
  home: {
    titleMsg: messages.pageHomeTitle,
    content: HomePage,
    path: '/',
    exact: true,
  },
  smExample: {
    titleMsg: messages.pageSmExampleTitle,
    content: FeaturePage,
    path: '/sm_example',
    exact: false,
  },
  unknown: {
    titleMsg: messages.pageSmExampleTitle,
    content: NotFoundPage,
    path: '',
    exact: false,
  },
};

/**
 * Indicates how the TopLevelRoute component will render.
 *
 * Content mode will render the whole page component.
 * Title mode will render just the page title text using
 * the active language.
 */
type TopLevelRouteRenderType = 'content' | 'title';
interface TopLevelRouteProps {
  render: TopLevelRouteRenderType;
  intl: InjectedIntl;
}

/**
 * Renders the active route.
 */
const ActiveRoute: React.FC<TopLevelRouteProps> = ({ render, intl }) => {
  const routes = Object.values(topLevelRoutes).map(route => {
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

  return <Switch>{routes}</Switch>;
};

export default injectIntl(ActiveRoute);
