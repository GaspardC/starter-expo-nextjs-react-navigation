import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';


import useCachedResources from './src/hooks/useCachedResources';
import LinkingConfiguration from './src/navigation/LinkingConfiguration';
import { ROUTES } from './src/navigation/routes';
import HomeScreen from './src/pages/home';
import LinksScreen from './src/pages/links';
import AppProvider from './src/components/appProvider/index';
import { isDevice } from './src/helpers/utils';
const AppWrapper = isDevice() ? AppProvider : React.Fragment; // Nextjs already wrapp in _app.tsx
const Stack = createStackNavigator();

export default function App(props) {
  const isLoadingComplete = useCachedResources({ skip: !isDevice() });

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <AppWrapper>
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
      </AppWrapper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
