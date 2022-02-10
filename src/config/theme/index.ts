import {
  createTheme,
  ThemeOptions,
  responsiveFontSizes
} from '@material-ui/core/styles'

const palette: ThemeOptions['palette'] = {
  primary: {
    main: '#4c4d4e',
    dark: '#28387C',
    light: '#647DCC'
  },
  secondary: {
    main: '#ffffff',
    dark: '#C36D18',
    light: '#F09F4F',
    contrastText: '#ffffff'
  },
  grey: {
    600: '#707070',
    800: '#4c4d4e'
  },
  text: {
    secondary: '#ffffff',
    primary: '#000000'
  }
}

const typography: ThemeOptions['typography'] = {
  fontFamily: 'Ubuntu',
  h1: {
    fontSize: 46,
    fontWeight: 'bold'
  },
  h2: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  h3: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  h4: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  h5: {
    fontSize: 20
  },
  body1: {
    fontSize: 18
  },
  body2: {
    fontSize: 16
  },
  subtitle1: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  subtitle2: {
    fontSize: 14,
    fontWeight: 'bold'
  }
}

const darkThemeOptions: ThemeOptions = {
  palette: {
    type: 'dark',
    ...palette
  },
  typography
}

const lightThemeOptions: ThemeOptions = {
  palette: {
    type: 'light',
    ...palette
  },
  typography
}

export const extraColors = {
  primaryVariantOpacity: 'rgb(45, 61, 181, 0.3)',
  secondaryVariantOpacity: 'rgb(237, 174, 109, 0.3)'
}

export default {
  darkTheme: responsiveFontSizes(createTheme(darkThemeOptions)),
  lightTheme: responsiveFontSizes(createTheme(lightThemeOptions))
}
