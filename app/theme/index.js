import { createMuiTheme } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import lime from '@material-ui/core/colors/lime';

const primary = lime[900];
const secondary = blue[500];

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary
    },
    secondary: {
      main: secondary
    }
  }
});

export default theme;
