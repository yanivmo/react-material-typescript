/*
 * NavDrawer Messages
 *
 * This contains all the text for the NavDrawer component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'NavDrawer';

export default defineMessages({
  homeButtonCaption: {
    id: `${scope}.home.button.caption`,
    defaultMessage: 'Home',
  },
  smExampleButtonCaption: {
    id: `${scope}.sm_example.button.caption`,
    defaultMessage: 'State machine example',
  },
  settingsButtonCaption: {
    id: `${scope}.settings.button.caption`,
    defaultMessage: 'Settings',
  },
  helpButtonCaption: {
    id: `${scope}.help.button.caption`,
    defaultMessage: 'Help',
  },
});
