

import React from 'react';
import { ThemeProvider as MagnusThemeProvider } from "react-native-magnus";
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { theme } from './theme'
import { SafeAreaView } from 'react-native'


const ThemeProvider = ({ children }) => {
    return <StyledThemeProvider theme={theme}>
        <MagnusThemeProvider theme={theme}>
            <SafeAreaView style={{ flex: 1 }}>
                {children}
            </SafeAreaView>
        </MagnusThemeProvider>
    </StyledThemeProvider>

}
export default ThemeProvider