/**
 * App Warning Theme
 */
import { createMuiTheme } from '@material-ui/core/styles';
import AppConfig from 'Constants/AppConfig';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            main: AppConfig.themeColors.warning
        },
        secondary: {
            main: AppConfig.themeColors.primary
        }
    }
});

export default theme;