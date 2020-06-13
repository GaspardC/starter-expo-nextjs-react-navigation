// @generated: @expo/next-adapter@2.1.12
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#withexpo

const { withExpo } = require('@expo/next-adapter');
const withFonts = require('next-fonts');
const withImages = require('next-images');

module.exports = withExpo(
  withImages(
    withFonts({
      projectRoot: __dirname,
    })
  )
);
