import { FormattedMessage } from 'react-intl';

import HomeIcon from '@material-ui/icons/Home';
import HelpIcon from '@material-ui/icons/Help';
import ErrorIcon from '@material-ui/icons/Warning';
import ExampleIcon from '@material-ui/icons/LocalPlay';
import SettingsIcon from '@material-ui/icons/Settings';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import messages from './messages';

type IntlMsgDesc = FormattedMessage.MessageDescriptor;

export interface RouteDescription {
  titleMsg: IntlMsgDesc;
  content: React.ComponentType;
  icon: React.ComponentType<SvgIconProps>;
  path: string;
  exact: boolean;
}

const routes: { [k: string]: RouteDescription } = {
  home: {
    titleMsg: messages.routeHomeTitle,
    content: HomePage,
    icon: HomeIcon,
    path: '/',
    exact: true,
  },
  smExample: {
    titleMsg: messages.routeSmExampleTitle,
    content: FeaturePage,
    icon: ExampleIcon,
    path: '/sm_example',
    exact: false,
  },
  settings: {
    titleMsg: messages.routeSettingsTitle,
    content: NotFoundPage,
    icon: SettingsIcon,
    path: '/settings',
    exact: false,
  },
  help: {
    titleMsg: messages.routeHelpTitle,
    content: NotFoundPage,
    icon: HelpIcon,
    path: '/help',
    exact: false,
  },
  unknown: {
    titleMsg: messages.route404Title,
    content: NotFoundPage,
    icon: ErrorIcon,
    path: '',
    exact: false,
  },
};

export default routes;
