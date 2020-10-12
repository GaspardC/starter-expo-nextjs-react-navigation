import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, SafeAreaView } from 'react-native';


import useCachedResources from './src/hooks/useCachedResources';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import LinkingConfiguration from './src/navigation/LinkingConfiguration';
import ThemeProvider from './src/config/theme/themeProvider';
import { ROUTES } from './src/navigation/routes';
import HomeScreen from './src/pages/home';
import LinksScreen from './src/pages/links';

const Stack = createStackNavigator();

export default function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ThemeProvider>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
          <NavigationContainer linking={LinkingConfiguration}>

            <Stack.Navigator screenOptions={{
              headerShown: false
            }}>
              <Stack.Screen name={ROUTES.home} component={HomeScreen} />
              <Stack.Screen name={ROUTES.links} component={LinksScreen} />

            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </ThemeProvider >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
