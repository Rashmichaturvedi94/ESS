import { Theme as MuiTheme } from '@material-ui/core/styles';

export type Theme = MuiTheme & {
  palette: { active: string; inactive: string };
};
