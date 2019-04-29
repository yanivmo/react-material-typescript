import * as React from 'react';

import createMuiTheme, {
  ThemeOptions,
} from '@material-ui/core/styles/createMuiTheme';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

/**
 * Augment createMuiTheme to add additional theming for the app drawer.
 */
declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    navDrawer: {
      width: React.CSSProperties['width'];
      breakpoint: Breakpoint;
    };
  }
  interface ThemeOptions {
    navDrawer?: {
      width?: React.CSSProperties['width'];
      breakpoint?: Breakpoint;
    };
  }
}

/**
 * Creates the default theme with our own additions.
 */
export default function createTheme(options: ThemeOptions) {
  return createMuiTheme({
    navDrawer: {
      width: 240,
      breakpoint: 'lg',
    },
    typography: {
      useNextVariants: true,
    },
    ...options,
  });
}
