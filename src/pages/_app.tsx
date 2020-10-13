import 'setimmediate';
import React from 'react'
import NextNprogress from 'nextjs-progressbar'
import { theme } from '../config/theme/theme';
import '../components/Toast/ReactToastify.css';
import Toast from '../components/Toast/index.web';
import useCachedResources from '../hooks/useCachedResources';
import Text from '../components/Text/index';
import useWindowDimensions from '../hooks/useWindowsDimensions/index';
import useWindowSize from '../hooks/useWindowsDimensions/index.web';
import AppProvider from '../components/appProvider';

const MyApp = (props) => {

    const areFontsLoaded = useCachedResources({})
    useWindowDimensions()
    useWindowSize()


    const { Component, pageProps } = props
    return (
        <AppProvider>
            <NextNprogress
                color={theme.colors.orange300}
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
            />
            {!areFontsLoaded ? <Text>Loading...</Text> : <Component {...pageProps} />}
            <Toast />
        </AppProvider>
    )
}

export default MyApp