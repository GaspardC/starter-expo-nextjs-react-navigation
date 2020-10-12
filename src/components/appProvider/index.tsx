
import React from 'react';
import ThemeProvider from '../../config/theme/themeProvider';
// import RecoilContainer from './recoil';


const AppProvider = ({ children }) => {

    return <ThemeProvider>
        {children}
    </ThemeProvider>

}

export default AppProvider