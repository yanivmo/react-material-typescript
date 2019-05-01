/*
 * Routes Messages
 *
 * This contains the text used in the app routes.
 */
import { defineMessages } from 'react-intl';

export const scope = 'Routes';

export default defineMessages({
  routeHomeTitle: {
    id: `${scope}.home.title`,
    defaultMessage: 'Home',
  },
  routeSmExampleTitle: {
    id: `${scope}.sm_example.title`,
    defaultMessage: 'State machine example',
  },
  routeSettingsTitle: {
    id: `${scope}.settings.title`,
    defaultMessage: 'Settings',
  },
  routeHelpTitle: {
    id: `${scope}.help.title`,
    defaultMessage: 'Help',
  },
  route404Title: {
    id: `${scope}.404.title`,
    defaultMessage: '404',
  },
});
