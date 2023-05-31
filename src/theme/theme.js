import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#3f51b5',
        },
        secondary: {
            main: '#f50057',
        },
        background: {
            default: '#ffffff',
        },
    },
    typography: {
        fontFamily: [
            'Roboto',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Arial',
            'sans-serif',
        ].join(','),
        h1: {
            fontSize: '2.5rem',
            fontWeight: 500,
            marginBottom: '1.5rem',
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 500,
            marginBottom: '1rem',
        },
        h4: {
            fontSize: '1.75rem',
            fontWeight: 500,
            marginBottom: '1rem',
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.5,
        },
    },
});

export default theme;
