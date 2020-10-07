

import React from 'react';
import { ThemeProvider as MagnusThemeProvider } from "react-native-magnus";
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { theme } from './theme'


const ThemeProvider = ({ children }) => {
    return <StyledThemeProvider theme={theme}>
        <MagnusThemeProvider theme={theme}>
            {children}
        </MagnusThemeProvider>
    </StyledThemeProvider>

}
export default ThemeProvider