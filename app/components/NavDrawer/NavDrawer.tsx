/**
 *
 * NavDrawer
 *
 * App-wide navigation drawer component.
 */

import React, { useCallback, useMemo } from 'react';
import { injectIntl, InjectedIntl } from 'react-intl';
import { Link } from 'react-router-dom';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, withStyles } from '@material-ui/core/styles';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import HomeIcon from '@material-ui/icons/Home';
import HelpIcon from '@material-ui/icons/Help';
import ExampleIcon from '@material-ui/icons/LocalPlay';
import SettingsIcon from '@material-ui/icons/Settings';

import messages from './messages';
import StyleClasses from 'styles/styleClasses';

const stylesPrototype = {
  drawer: {
    width: 0,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 0,
  },
};

type NavDrawerClasses = StyleClasses<typeof stylesPrototype>;

interface DrawerButtonProps {
  caption: string;
  linkTo: string;
  icon: React.ComponentType<SvgIconProps>;
}

interface NavDrawerProps {
  intl: InjectedIntl;
}

/**
 * Return the length of the longest string in an array.
 */
function longest(strings: string[]): number {
  return strings.reduce((max, s) => Math.max(s.length, max), 0);
}

/**
 * A component representing one navigation item in the navigation
 * drawer.
 */
const DrawerButton: React.SFC<DrawerButtonProps> = ({
  caption,
  linkTo,
  icon,
}) => {
  // Make it recognizable as a React component
  const Icon = icon;

  // A component linking to the specific page. Remount it only when
  // linkTo property changes
  const LinkTo = useCallback(props => <Link to={linkTo} {...props} />, [
    linkTo,
  ]);

  return (
    <ListItem button component={LinkTo}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={caption} />
    </ListItem>
  );
};

/**
 * App-wide navigation drawer component.
 */
const NavDrawer: React.SFC<NavDrawerProps & NavDrawerClasses> = ({
  intl,
  classes,
}) => {
  return (
    <Drawer
      open
      variant="permanent"
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <List>
        <DrawerButton
          caption={intl.formatMessage(messages.homeButtonCaption)}
          icon={HomeIcon}
          linkTo="/"
        />
        <DrawerButton
          caption={intl.formatMessage(messages.smExampleButtonCaption)}
          icon={ExampleIcon}
          linkTo="/sm_example"
        />
      </List>
      <Divider />
      <List>
        <DrawerButton
          caption={intl.formatMessage(messages.settingsButtonCaption)}
          icon={SettingsIcon}
          linkTo="/settings"
        />
        <DrawerButton
          caption={intl.formatMessage(messages.helpButtonCaption)}
          icon={HelpIcon}
          linkTo="/help"
        />
      </List>
    </Drawer>
  );
};

const StyledNavDrawer: React.SFC<NavDrawerProps> = ({ intl }) => {
  const styles = useMemo(
    () => {
      const maxTextWidth = longest(
        Object.values(messages).map(m => intl.formatMessage(m)),
      );

      // The calculated width is an approximation based on the number
      // of letters and the maximum possible letter width. In practice
      // it is usually somewhat smaller. We could invewstigate the DOM
      // for the real values but it feels like an overkill at this stage
      const widthEmpiricalAdjustment = 0.9;

      const newStyles = Object.create(stylesPrototype);
      newStyles.drawer.width = `${maxTextWidth * widthEmpiricalAdjustment}em`;
      newStyles.drawerPaper.width = newStyles.drawer.width;

      return newStyles;
    },
    [intl],
  );

  const StyledMe = withStyles(createStyles(styles))(NavDrawer);

  return <StyledMe intl={intl} />;
};

export default injectIntl(StyledNavDrawer);
