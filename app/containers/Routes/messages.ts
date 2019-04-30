/*
 * Routes Messages
 *
 * This contains the text used in the app routes.
 */
import { defineMessages } from 'react-intl';

export const scope = 'Routes';

export default defineMessages({
  pageHomeTitle: {
    id: `${scope}.home.title`,
    defaultMessage: 'Home',
  },
  pageSmExampleTitle: {
    id: `${scope}.sm_example.title`,
    defaultMessage: 'State machine example',
  },
  pageSettingsTitle: {
    id: `${scope}.settings.title`,
    defaultMessage: 'Settings',
  },
  pageHelpTitle: {
    id: `${scope}.help.title`,
    defaultMessage: 'Help',
  },
  page404Title: {
    id: `${scope}.404.title`,
    defaultMessage: '404',
  },
});
