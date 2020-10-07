import React, { useState } from 'react';
import WebView from 'react-native-webview';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { theme } from '../../config/theme/theme';
import { Metrics } from '../../helpers/utils';
import TouchableOpacity from '../Buttons/touchable';
import { Icon } from 'react-native-magnus';

const FullWebView = ({ url, onClose }) => {
  const [loading, setLoading] = useState(true)
  const closeWebView = () => {
    if (onClose) {
      onClose();
    }
  };
  return (
    <View style={styles.mainCont}>
      <TouchableOpacity onPress={closeWebView} style={styles.touchable}>
        <Icon
          name="close"
          color="black"
          fontSize={'large'}
          fontFamily="AntDesign"
        />
      </TouchableOpacity>
      {loading && <ActivityIndicator size='large' color={theme.colors.orange600} style={{ marginTop: 30 }} />}
      <WebView
        source={{ uri: url }}
        style={styles.container}
        scrollEnabled={true}
        onLoadEnd={syntheticEvent => {
          setLoading(false)
        }}
        onError={() => { setLoading(false) }}
      />
    </View>
  );
};
export default FullWebView;

const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    ...StyleSheet.absoluteFillObject
  },
  touchable: {
    backgroundColor: 'transparent',
    padding: theme.spacing.md,
  },
  container: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
  },
  close: { fontSize: theme.fontSize.medium },
});
