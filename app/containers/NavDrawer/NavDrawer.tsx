/**
 *
 * NavDrawer
 *
 * App-wide navigation drawer.
 */

import React, { useMemo } from 'react';
import { injectIntl, InjectedIntl } from 'react-intl';
import { Link } from 'react-router-dom';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, withStyles } from '@material-ui/core/styles';

import MaterialIcon from 'components/icons/Material-UI';
import ReactIcon from 'components/icons/React';
import TypeScriptIcon from 'components/icons/TypeScript';

import StyleClasses from 'styles/styleClasses';
import { Typography } from '@material-ui/core';

import routes, { RouteDescription } from 'containers/Routes';

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

/**
 * Return the length of the longest string in an array.
 */
function longest(strings: string[]): number {
  return strings.reduce((max, s) => Math.max(s.length, max), 0);
}

interface RouteButtonProps {
  route: RouteDescription;
  intl: InjectedIntl;
}

/**
 * A component representing one navigation item in the navigation
 * drawer.
 */
const RouteButton: React.FC<RouteButtonProps> = ({ route, intl }) => {
  const Icon = route.icon;
  const LinkTo = props => <Link to={route.path} {...props} />;

  return (
    <ListItem button component={LinkTo}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={intl.formatMessage(route.titleMsg)} />
    </ListItem>
  );
};

/**
 * The header of the navigation drawer.
 * Usually contains a caption or an icon.
 */
const DrawerHeader: React.FC = () => {
  const iconSize = useMemo(
    () => ({
      width: '3.5em',
      height: '3.5em',
      marginTop: '0.5em',
      marginBottom: '0.5em',
    }),
    [],
  );
  return (
    <Grid container justify="center" alignItems="center">
      <Typography variant="title">
        <ReactIcon style={iconSize} />
        <TypeScriptIcon
          style={{ marginLeft: '0.5em', marginRight: '0.5em', ...iconSize }}
        />
        <MaterialIcon style={iconSize} />
      </Typography>
    </Grid>
  );
};

interface NavDrawerProps {
  intl: InjectedIntl;
}

/**
 * App-wide navigation drawer component.
 */
const NavDrawer: React.FC<NavDrawerProps & NavDrawerClasses> = ({
  intl,
  classes,
}) => {
  const routeButton = route => <RouteButton route={route} intl={intl} />;

  return (
    <Drawer
      open
      variant="permanent"
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <DrawerHeader />
      <Divider />
      <List component="nav">
        {routeButton(routes.home)}
        {routeButton(routes.smExample)}
      </List>
      <Divider />
      <List component="nav">
        {routeButton(routes.settings)}
        {routeButton(routes.help)}
      </List>
    </Drawer>
  );
};

const StyledNavDrawer: React.FC<NavDrawerProps> = ({ intl }) => {
  const styles = useMemo(
    () => {
      const maxTextWidth = longest(
        Object.values(routes).map(r => intl.formatMessage(r.titleMsg)),
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
