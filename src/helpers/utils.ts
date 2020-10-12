import packageJson from '../../package.json';
import AsyncStorage from '@react-native-community/async-storage';
import { Platform, Dimensions } from 'react-native';

import styledWeb from 'styled-components'
import styledNative from 'styled-components/native';
import { BREAKPOINTS_W, DEVICES } from '../hooks/useWindowsDimensions/breakpoints';

export const isDev = () => __DEV__;
export const isBrowser = () => typeof window !== 'undefined';
export const isWeb = () => Platform.OS === 'web';
export const isDevice = () => Platform.OS === 'android' || Platform.OS === 'ios';
export const isServerSide = () => !isBrowser() && !isDevice();
export const noop = () => { }
// export const isCypress = () => isBrowser() && (window as any).Cypress

export const getPackageValue = (value: string) => packageJson[value];

const SERVER_SIDE_DEFAULT_WIDTH = 1000;
const dim = Dimensions.get(isDevice() ? 'window' : 'screen')
export const Metrics = {
    fullScreenHeight: isDevice() ? dim.height : '100vh',
    fullScreenWidth: isDevice() ? dim.width : '100vw',
    fullScreenHeightN: dim.height,
    fullScreenWidthN: dim.width,
    screenWidth: isServerSide() ? SERVER_SIDE_DEFAULT_WIDTH : (!isDevice() ? window.innerWidth : dim.width),
    screenHeight: isServerSide() ? SERVER_SIDE_DEFAULT_WIDTH : (!isDevice() ? window.innerHeight : dim.height)
}

export const queryString = params => Object.keys(params).map(key => key + '=' + params[key]).join('&');

export const shortSentence = (str = '', maxLength = 200, upperFirst = true) => {
    let trimmedString = str.substr(0, maxLength);
    // re-trim if we are in the middle of a word
    // if one work only keep it else get last word meaning until last index of " "
    const indexLastSpace = trimmedString.lastIndexOf(" ");
    if (indexLastSpace !== -1) {
        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, indexLastSpace))
    }
    return !upperFirst ? trimmedString : `${firstLetterUpper(trimmedString)}`
}

export const firstLetterUpper = (str = '') => `${str.charAt(0).toUpperCase()}${str.substring(1, str.length).toLowerCase()}`
export const trimUslessSpaces = (str = '') => str.replace(/  +/g, ' ').replace(/^\s+/g, '');

export const hexToRGBA = (hex, alpha) => {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
    } else {
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
};

export const copyObjectValuesInto = (objSrc = {}, objDest = {}) => {
    Object.entries(objSrc).forEach(([key, value]) => objDest[key] = value)
}

export const getParamsFromStr = (url: string, key: string) => {
    const urlParams = new URLSearchParams(url);
    return urlParams.get(key);
}


export const saveToAsynStorage = (key, string) => {
    if (isServerSide()) return noopPromise()
    return AsyncStorage.setItem(key, string);
};

export const getAsyncStorage = key => {
    if (isServerSide()) return noopPromise()
    return AsyncStorage.getItem(key);
};
export const removeAsyncStorage = key => {
    if (isServerSide()) return noopPromise()
    return AsyncStorage.removeItem(key);
};


//TODO: dirty workaround for tablet need to change the logic im modal to update the layout correctly
export const isMobileLayout = () => isServerSide() ? 1000 : (Dimensions.get('window').width < BREAKPOINTS_W[DEVICES.MOBILE] || (isDevice() && Dimensions.get('window').width < BREAKPOINTS_W[DEVICES.TABLET]));

export function isJsonString(str) {
    try {
        return JSON.parse(str);
    } catch (e) {
        return false;
    }
}
export const noopPromise = () => new Promise((resolve) => { resolve(true) })



export const styled = isDevice() ? styledNative : styledWeb;


export const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

export const getUniqueId = () => Math.floor(Math.random() * 100000000)