// @ts-nocheck
import { ThemeProvider, Global, css } from '@emotion/react'
import PropTypes from 'prop-types'
import normalize from 'emotion-normalize'
import colors from './colors'
import { breakpoints } from './breakpoints'

const theme = {
  colors,
  breakpoints,
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    
    <Global
      styles={css`
      ${normalize}

      :root {
        --primary: ${theme.colors.blue08};
        --light-blue-1: ${theme.colors.blue01};
        --light-blue-2: ${theme.colors.blue02};
        --light-blue-3: ${theme.colors.blue03};
        --light-blue-11: ${theme.colors.blue11};
        --light-blue-12: ${theme.colors.blue12};
        --secondary: ${theme.colors.yellow06};
        --black: ${theme.colors.gray09};
        --light-gray: ${theme.colors.gray02};
        --light-gray-0: ${theme.colors.gray00};
        --light-gray-1: ${theme.colors.gray01};
        --light-gray-2: ${theme.colors.gray04};
        --light-red-1: ${theme.colors.red01};
        --white: white;
        --danger: ${theme.colors.gray09};
        --blue-text: ${theme.colors.blue06};
        --blueheader: ${theme.colors.blue061};
        --headertext:${theme.colors.blue062};
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
    `}
/>
    {children}
  </ThemeProvider>
)

Theme.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Theme
