// @generated: @expo/next-adapter@2.1.12
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#withexpo

const { withExpo } = require("@expo/next-adapter");
const withFonts = require("next-fonts");
const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");

const withTM = require("next-transpile-modules")([
  "expo-next-react-navigation"
  // you can add other modules that need traspiling here
]);

module.exports = withPlugins(
  [withTM, withFonts, withImages, [withExpo, { projectRoot: __dirname }]],
  {
    // future: { webpack5: true }
    // experimental: {
    //   async redirects() {
    //     return [
    //       // 308 permanent redirect
    //       {
    //         source: '/home',
    //         destination: '/',
    //         permanent: true, // permanent redirect
    //       },
    //     ];
    //   },
    // },
  }
);
