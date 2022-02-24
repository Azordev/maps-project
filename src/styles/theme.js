import { createGlobalStyle, ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import { Normalize } from 'styled-normalize'
import colors from './colors'
import { breakpoints } from './breakpoints'

const GlobalStyles = createGlobalStyle`
:root {
  --primary: ${({ theme }) => theme.colors.blue08};
  --secondary: ${({ theme }) => theme.colors.yellow06};
  --black: ${({ theme }) => theme.colors.gray09};
  --light-gray: ${({ theme }) => theme.colors.gray02};
  --light-gray-2: ${({ theme }) => theme.colors.gray04};
  --white: white;
  --danger: ${({ theme }) => theme.colors.gray09};
  --blue-text: ${({ theme }) => theme.colors.blue06};

  --font-family: 'Poppins', sans-serif;
  --z-normal: 0;
  --z-map: 10;
  --z-map-item: 20;
  --z-modal-overlay: 30;
  --z-modal:40;

  --max-width: 1200px;
}

body {
  font-family: var(--font-family, Poppins), sans-serif;
  font-size: 16px;
}

h1, h2, h3, h4, h5, h6, p, span, b, strong, em, i, a {
  color: inherit; 
  font-family: var(--font-family);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  letter-spacing: 0em;
  overflow-wrap: break-word;
}
`

const theme = {
  colors,
  breakpoints,
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Normalize />
    <GlobalStyles />
    {children}
  </ThemeProvider>
)

Theme.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Theme
