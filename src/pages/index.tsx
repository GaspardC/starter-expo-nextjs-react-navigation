// @generated: @expo/next-adapter@2.1.12
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './home';
import ExpoApp from '../../App';
export default function App() {
  return <ExpoApp />;
  return <HomeScreen />;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});
