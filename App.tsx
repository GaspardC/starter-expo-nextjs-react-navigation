import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";

import useCachedResources from "./src/hooks/useCachedResources";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import LinkingConfiguration, {
  PAGES_ROUTES
} from "./src/navigation/LinkingConfiguration";

const Stack = createStackNavigator();

const INITIAL_ROUTE_NAME = PAGES_ROUTES.Home;

export default function App(props: {
  initialRouteName?: typeof PAGES_ROUTES[keyof typeof PAGES_ROUTES];
}) {
  const isLoadingComplete = useCachedResources();
  const initialRouteName = props?.initialRouteName;
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator>
            <Stack.Screen
              name={PAGES_ROUTES.Root}
              component={(args) => (
                <BottomTabNavigator
                  {...args}
                  initialRouteName={initialRouteName}
                />
              )}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
