
import React from 'react';
import ThemeProvider from '../../config/theme/themeProvider';
import ReduxPersist from './redux/index';


const AppProvider = ({ children, pageProps }: { children, pageProps?}) => {

    return <ThemeProvider>
        <ReduxPersist {...{ pageProps }}>
            {children}
        </ReduxPersist>
    </ThemeProvider >

}

export default AppProvider