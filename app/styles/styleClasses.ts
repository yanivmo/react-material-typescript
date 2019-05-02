import { StyleRules, WithStyles, Theme } from '@material-ui/core/styles';

/**
 * Helper type used to define additional React component properties,
 * which are added by MUI's withStyles function.
 */
type StyleClasses<T extends StyleRules> = WithStyles<(theme: Theme) => T>;

export default StyleClasses;
