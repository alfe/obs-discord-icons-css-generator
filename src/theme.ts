import createTheme from '@mui/material/styles/createTheme';
import shadows from '@mui/material/styles/shadows';
import grey from '@mui/material/colors/grey';

const DISCORD_BLUE = '#5865F2';
const theme = createTheme({
palette: {
    primary: {
    main: DISCORD_BLUE,
    },
    text: {
    primary: grey[50],
    secondary: grey[100],
    }
},
components: {
    MuiPaper: {
    styleOverrides: {
        root: {
        color: grey[900],
        },
    },
    },
    MuiToggleButton: {
    styleOverrides: {
        root: {
        color: grey[200],
        }
    }
    },
    MuiToggleButtonGroup: {
    styleOverrides: {
        root: {
        color: grey[50],
        '.Mui-selected.Mui-selected': {
            backgroundColor: '#5865F2',
            color: grey[50],
            boxShadow: shadows[2],
            borderRadius: '4px',
        },
        '.Mui-selected.Mui-selected:hover': {
            backgroundColor: '#5865F2',
            color: grey[50],
            boxShadow: shadows[2],
            borderRadius: '4px',
        }
        }
    },
    },
},
});
export default theme;
