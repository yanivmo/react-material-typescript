/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { MuiThemeProvider, withTheme } from '@material-ui/core/styles';

import createTheme from 'styles/createTheme';
import NavDrawer from 'containers/NavDrawer';
import { ActiveRoute } from 'containers/Routes';

const theme = createTheme({});

const Root = styled.div`
  display: flex;
  position: fixed;
  height: 100%;
  width: 100%;
`;

const ContentContainer = withTheme()(styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${props => props.theme.palette.background.default};
`);

const Main = withTheme()(styled.main`
  flex-grow: 1;
  width: 100%;
  padding: ${props => props.theme.spacing.unit * 3}px;
`);

/**
 * Takes care of the title, description and fonts of all the pages.
 */
const Head: React.FC = () => {
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

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Head />
      <Root>
        <NavDrawer />
        <ContentContainer>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" color="inherit" noWrap>
                <ActiveRoute render="title" />
              </Typography>
            </Toolbar>
          </AppBar>
          <Main>
            <ActiveRoute render="content" />
          </Main>
        </ContentContainer>
      </Root>
    </MuiThemeProvider>
  );
};

export default App;
