// @generated: @expo/next-adapter@2.1.12
// export { default } from '@expo/next-adapter/document';

// Based on https://github.com/zeit/next.js/tree/canary/examples/with-react-native-web
// and https://github.com/expo/expo-cli/blob/master/packages/webpack-config/web-default/index.html
import NextDocument, { Head, Main, NextScript } from 'next/document';
import * as React from 'react';

import { AppRegistry } from 'react-native';
import { theme } from '../config/theme/theme';

export const style = `
/**
 * Building on the RNWeb reset:
 * https://github.com/necolas/react-native-web/blob/master/packages/react-native-web/src/exports/StyleSheet/initialRules.js
 */
html, body, #__next {
  width: 100%;
  /* To smooth any scrolling behavior */
  -webkit-overflow-scrolling: touch;
  margin: 0px;
  padding: 0px;
  /* Allows content to fill the viewport and go beyond the bottom */
  min-height: 100%;
}
#__next {
  flex-shrink: 0;
  flex-basis: auto;
  flex-direction: column;
  flex-grow: 1;
  display: flex;
  flex: 1;
}
html {
  scroll-behavior: smooth;
  /* Prevent text size change on orientation change https://gist.github.com/tfausak/2222823#file-ios-8-web-app-html-L138 */
  -webkit-text-size-adjust: 100%;
  height: 100%;
}
body {
  display: flex;
  /* Allows you to scroll below the viewport; default value is visible */
  overflow-y: auto;
  overscroll-behavior-y: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -ms-overflow-style: scrollbar;
}
`;

export async function getInitialProps({ renderPage }) {
    AppRegistry.registerComponent('Main', () => Main);
    //@ts-ignore
    const { getStyleElement } = AppRegistry.getApplication('Main');
    const page = renderPage();
    const styles = [<style dangerouslySetInnerHTML={{ __html: style }} />, getStyleElement()];
    return { ...page, styles: React.Children.toArray(styles) };
}


const MYSITE = {
    url: 'https://mysite.com',
    description: `This this the best starter`,
    title: `Next Expo Custom starter`,
    previewImage: ''
}


export class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { title, description, previewImage } = MYSITE
        return (
            <Head>
                <title>{title}</title>
                <meta name="Description" content={description} />
                {/* <link rel="shortcut icon" href="/static/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color={theme.colors.orange400} />
                <meta name="msapplication-TileColor" content={theme.colors.orange400} />
                <meta name="theme-color" content={theme.colors.violet400}></meta> */}

                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

                {
                    /* Open Graph */
                }
                <meta name="og:url" content={`https://mysite.com`} key="ogurl" />
                <meta name="og:image" content={previewImage} key="ogimage" />
                <meta name="og:site_name" content={title} key="ogsitename" />
                <meta name="og:title" content={title} key="ogtitle" />
                <meta name="og:description" content={description} key="ogdesc" />


            </Head>
        );
    }
}


export class Document extends NextDocument {
    static getInitialProps = getInitialProps;

    render() {
        return (
            <html>
                <Header />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

export default Document;
