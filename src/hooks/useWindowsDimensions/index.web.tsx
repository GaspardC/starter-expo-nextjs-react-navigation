import { useEffect, useState } from 'react';
import { isWeb, Metrics } from '../../helpers/utils';

const DEFAULT_SZE = 1200;
export enum DEVICES { SMALL_MOBILE = 'small_mobile', MOBILE = 'mobile', TABLET = 'tablet', DESKTOP = 'desktop' }
export const BREAKPOINTS_W = {
  [DEVICES.SMALL_MOBILE]: 375,
  [DEVICES.MOBILE]: 600,
  [DEVICES.TABLET]: 1025
}

export const isDesktop = type => type === DEVICES.DESKTOP;
export const isTablet = type => type === DEVICES.TABLET;
export const isMobile = type => type === DEVICES.MOBILE || type === DEVICES.SMALL_MOBILE;
export const isSmallMobile = type => type === DEVICES.SMALL_MOBILE;

/**
 * @param type device
 * @param sizes array of sizes 0 for mobile, 1 for tablet and 2 for desktop
 */

export const getSize = (type: DEVICES, sizes: any[]) => {
  switch (type) {
    case DEVICES.MOBILE:
      return sizes[0]
    case DEVICES.TABLET:
      return sizes[1];
    case DEVICES.DESKTOP:
      return sizes[2];
    case DEVICES.SMALL_MOBILE:
      return sizes[3]
  }
}

function useWindowSize() {
  const isClient = typeof window === 'object';

  function getScreenSize() {

    const width = isWeb() ? (isClient ? window.innerWidth : DEFAULT_SZE) : Metrics.screenWidth;
    const height = isWeb() ? (isClient ? window.innerHeight : DEFAULT_SZE) : Metrics.screenHeight;

    let type = DEVICES.DESKTOP
    if (width <= BREAKPOINTS_W[DEVICES.SMALL_MOBILE]) {
      type = DEVICES.SMALL_MOBILE
    }
    else if (width < BREAKPOINTS_W[DEVICES.MOBILE]) {
      type = DEVICES.MOBILE
    } else if (width < BREAKPOINTS_W[DEVICES.TABLET]) {
      type = DEVICES.TABLET
    }
    return {
      width,
      height,
      isPortrait: width < height,
      type,
      isMobile: isMobile(type),
      isSmallMobile: isSmallMobile(type),
      isTablet: isTablet(type),
      isDesktop: isDesktop(type)
    };
  }

  const [windowSize, setWindowSize] = useState(getScreenSize);

  //@ts-ignore
  useEffect(() => {
    if (!isClient || !isWeb()) return
    function handleResize() {
      // console.log('RESIZE')
      setWindowSize(getScreenSize());
    }
    handleResize()
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}

export default useWindowSize