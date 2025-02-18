import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import FiraSans from '../assets/fonts/FiraSans-Regular.ttf';


const fira = {
  fontFamily: 'FiraSans',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('FiraSans'),
    local('FiraSans-Regular'),
    url(${FiraSans}) format('ttf')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, ' +
    'U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, ' +
    'U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

let theme = createMuiTheme({
  status: {
    danger: {
      main: '#ff9800',
    },
  },
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3',
    },
    type: 'dark',
  },
  typography: {
    fontFamily: 'FiraSans, Arial',
    h5: {
      fontWeight: 300,
      fontSize: 30,
      letterSpacing: 0.7,
    },
  },
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,

    },
  },
});

theme = {
  ...theme,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [fira],
      },
    },
    MuiDrawer: {
      paper: {
        backgroundColor: '#18202c',
      },
    },
    MuiButton: {
      label: {
        textTransform: 'none',
      },
      contained: {
        'boxShadow': 'none',
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing(1),
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white,
      },
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        margin: '0 16px',
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up('md')]: {
          padding: 0,
          minWidth: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1),
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854',
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiListItemIcon: {
      root: {
        'color': 'inherit',
        'marginRight': -7,
        '& svg': {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
  },
};

export default theme;
