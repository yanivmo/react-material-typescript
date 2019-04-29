/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, withTheme } from '@material-ui/core/styles';

import createTheme from 'styles/createTheme';

import NavDrawer from 'components/NavDrawer';
import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

const theme = createTheme({});

const AppContent = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const Main = withTheme()(styled.main`
  flex-grow: 1;
  height: 100%;
  background-color: ${props => props.theme.palette.background.default};
  padding: ${props => props.theme.spacing.unit * 3};
`);

/**
 * Takes care of the title, description and fonts of all the pages.
 */
const Head: React.SFC = () => {
  return (
    // %s is replaced by the title of the current page
    <Helmet
      titleTemplate="%s - React Boilerplate App"
      defaultTitle="React Boilerplate App"
    >
      <meta name="description" content="React boilerplate application" />

      {/* Material UI standard font */}
      <link
        key="link1"
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
      />

      {/* Material UI icons */}
      <link
        key="link2"
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </Helmet>
  );
};

const App: React.SFC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Head />
      <AppContent>
        <NavDrawer />
        <Main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/sm_example" component={FeaturePage} />
            <Route path="" component={NotFoundPage} />
          </Switch>
        </Main>
      </AppContent>
    </MuiThemeProvider>
  );
};

export default App;
