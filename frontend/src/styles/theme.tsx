import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import createPalette, { Palette } from '@material-ui/core/styles/createPalette';
import CheckIcon from '@material-ui/icons/Check';
import { Theme } from './theme.interface';

const palette: Palette = createPalette({
  primary: {
    main: '#000000',
    dark: '#5e5e5e',
    light: '#a9a9a9',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#ffffff',
    dark: '#a9a9a9',
    light: '#d4d4d4',
    contrastText: '#000000',
  },
  error: {
    dark: '#f60000',
    light: '#fff2f2',
    main: '#f60000',
    contrastText: '#ffffff',
  },
  success: {
    dark: '#27ae60',
    light: '#f0f9f4',
    main: '#27ae60',
    contrastText: '#ffffff',
  },
  info: {
    main: '#1275FF',
    dark: '#0c51b2',
    light: '#E7F1FF',
    contrastText: '#ffffff',
  },
  background: {
    default: '#e5e5e5',
  },
});

const defaultMuiTheme = createMuiTheme();

export const muiTheme = createMuiTheme({
  typography: {
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    button: {
      textTransform: 'none',
    },
  },
  palette,
  overrides: {
    MuiInputBase: {
      root: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        borderColor: 'rgba(0, 0, 0, 0.05)',
        borderWidth: 1,
        borderStyle: 'solid',
        minHeight: '40px',

        '& .MuiInputAdornment-root MuiInputAdornment-positionEnd': {
          display: 'none',
        },

        '&$error': {
          borderColor: palette.error.light,
          backgroundColor: palette.error.light,

          '& .MuiSvgIcon-root': {
            color: palette.error.main,
          },
        },

        '&$focused': {
          borderColor: palette.primary.main,
          backgroundColor: palette.secondary.main,

          '& .MuiInputAdornment-root MuiInputAdornment-positionEnd': {
            display: 'block',
          },
        },

        '&$disabled': {
          backgroundColor: 'rgba(0, 0, 0, 0.03)',
          borderColor: 'rgba(0, 0, 0, 0.03)',
        },
      },
      input: {
        font: undefined,
        padding: 0,
        fontSize: '14px',
        lineHeight: '120%',
        letterSpacing: '0.3px',
        color: palette.primary.main,
      },
      inputMultiline: {
        margin: '12px 0',
      },
    },
    MuiInput: {
      root: {
        padding: '0 16px',
      },
      formControl: {
        'label + &': {
          marginTop: '0px',
        },
      },
    },
    MuiInputAdornment: {
      root: {
        width: '16px',
        height: '16px',

        '& .MuiButtonBase-root': {
          padding: 6,
        },

        '& .MuiSvgIcon-root': {
          width: '16px',
          height: '16px',
        },
      },
    },
    MuiInputLabel: {
      root: {
        margin: 0,
        marginTop: 0,
        fontSize: '13px',
        lineHeight: '120%',
        letterSpacing: '0.3px',
        color: palette.primary.main,

        '&$shrink': {
          transform: 'initial',
        },

        '&$focused': {
          color: palette.primary.main,
        },

        '&$error': {
          color: palette.primary.main,
        },
      },
      formControl: {
        position: 'relative',
        marginBottom: '8px',
      },
    },
    MuiFormHelperText: {
      root: {
        fontSize: '12px',
        lineHeight: '120%',
        letterSpacing: '0.3px',
        marginTop: '8px',

        '&$error': {
          color: palette.error.main,
        },
      },
    },
    MuiButton: {
      root: {
        borderRadius: 0,
      },
      contained: {
        boxShadow: undefined,
        borderWidth: '1px',
        borderStyle: 'solid',
      },
      containedPrimary: {
        borderColor: palette.primary.main,

        '&:hover': {
          borderColor: palette.primary.dark,
          backgroundColor: palette.primary.dark,
        },

        '&$disabled': {
          backgroundColor: palette.primary.light,
          borderColor: palette.primary.light,
          color: palette.primary.contrastText,
        },
      },
      containedSecondary: {
        borderColor: palette.secondary.light,

        '&:hover': {
          backgroundColor: palette.secondary.light,
        },

        '&$disabled': {
          backgroundColor: palette.secondary.main,
          color: palette.secondary.dark,
        },
      },
    },
    MuiIconButton: {
      root: {
        borderRadius: 0,
        padding: '7px',

        '&$disabled': {
          backgroundColor: palette.primary.light,
          borderColor: palette.primary.light,
          color: palette.primary.contrastText,
        },
      },
      colorPrimary: {
        backgroundColor: palette.primary.main,
        color: palette.primary.contrastText,
        borderColor: palette.primary.main,

        '&:hover': {
          borderColor: palette.primary.dark,
          backgroundColor: palette.primary.dark,
        },

        '&$disabled': {
          backgroundColor: palette.primary.light,
          borderColor: palette.primary.light,
          color: palette.primary.contrastText,
        },
      },
    },
    MuiCheckbox: {
      root: {
        padding: 0,
        borderWidth: '1px',
        borderStyle: 'solid',
        boxSizing: 'border-box',
      },
      colorPrimary: {
        backgroundColor: palette.info.light,
        borderColor: palette.info.main,
        color: palette.info.light,

        '&$checked': {
          color: palette.info.main,
        },

        '&$disabled': {
          backgroundColor: palette.info.light,
          color: 'transparent',

          '&$checked': {
            color: palette.action.disabled,
          },
        },

        '&:hover': {
          borderColor: palette.info.main,
          backgroundColor: palette.info.light,
        },
      },
    },
    MuiFormControlLabel: {
      root: {
        marginLeft: 0,
        marginRight: 0,
      },
      label: {
        marginLeft: '12px',
      },
    },
    MuiDrawer: {
      paper: {
        position: 'relative',
        width: '56px',
      },
    },
    MuiTab: {
      root: {
        marginTop: '20px',

        [defaultMuiTheme.breakpoints.up('xs')]: {
          minWidth: 0,
        },
      },
      textColorPrimary: {
        color: palette.primary.main,
      },
    },
    MuiAppBar: {
      positionRelative: {
        maxWidth: '100vw',
      },
    },
    MuiToolbar: {
      root: {
        backgroundColor: palette.background.paper,
      },
    },
    MuiCard: {
      root: {
        padding: defaultMuiTheme.spacing() * 3,
      },
    },
  },
  props: {
    MuiInput: {
      disableUnderline: true,
    },
    MuiInputLabel: {
      disableAnimation: true,
      shrink: true,
    },
    MuiButton: {
      color: 'primary',
    },
    MuiCheckbox: {
      color: 'primary',
      checkedIcon: <CheckIcon />,
    },
    MuiTabs: {
      indicatorColor: 'primary',
      textColor: 'primary',
    },
    MuiPaper: {
      elevation: 0,
      square: true,
    },
    MuiCard: {
      elevation: 0,
      square: true,
    },
  },
});

export const theme: Theme = {
  ...muiTheme,
  palette: {
    ...muiTheme.palette,
    active: '#27ae60',
    inactive: '#f2994b',
  },
};
