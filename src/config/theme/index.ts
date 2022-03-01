import {
  createTheme,
  ThemeOptions,
  responsiveFontSizes
} from '@material-ui/core/styles'

const palette: ThemeOptions['palette'] = {
  primary: {
    main: '#ffffff',
    dark: '#1e212c',
    light: '#647DCC'
  },
  secondary: {
    main: '#ff5a30',
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
    fontSize: 14
  },
  caption: {
    fontSize: 12
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
  secondaryVariantOpacity: 'rgb(237, 174, 109, 0.3)',
  boxBorderPrimary: '#dadbdd',
  boxBorderSecondary: 'rgba(218, 219, 221, 0)',
  percentageFirtsColor: '#f89828',
  percentageSecondColor: '#f52f6e',
  percentageThirdColor: '#5a87fc',
  percentageQuarterColor: '#03cea4'
}

export default {
  darkTheme: responsiveFontSizes(createTheme(darkThemeOptions)),
  lightTheme: responsiveFontSizes(createTheme(lightThemeOptions))
}
