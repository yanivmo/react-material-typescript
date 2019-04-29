/**
 *
 * NavDrawer
 *
 * App-wide navigation drawer component.
 */

import React, { useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withTheme, Theme } from '@material-ui/core/styles';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import HomeIcon from '@material-ui/icons/Home';
import HelpIcon from '@material-ui/icons/Help';
import ExampleIcon from '@material-ui/icons/LocalPlay';
import SettingsIcon from '@material-ui/icons/Settings';

interface DrawerButtonProps {
  caption: string;
  linkTo: string;
  icon: React.ComponentType<SvgIconProps>;
}

interface NavDrawerProps {
  theme: Theme;
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
const NavDrawer: React.SFC<NavDrawerProps> = ({ theme }) => {
  const style = useMemo(
    () => ({
      width: theme.navDrawer.width,
      flexShrink: 0,
    }),
    [theme],
  );

  return (
    <Drawer variant="permanent" style={style} open>
      <List>
        <DrawerButton caption="Home" icon={HomeIcon} linkTo="/" />
        <DrawerButton
          caption="State machine example"
          icon={ExampleIcon}
          linkTo="/sm_example"
        />
      </List>
      <Divider />
      <List>
        <DrawerButton
          caption="Settings"
          icon={SettingsIcon}
          linkTo="/settings"
        />
        <DrawerButton caption="Help" icon={HelpIcon} linkTo="/help" />
      </List>
    </Drawer>
  );
};

export default withTheme()(NavDrawer);
