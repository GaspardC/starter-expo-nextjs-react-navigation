import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect } from "react";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../pages/tab/home";
import LinksScreen from "../pages/tab/links";
import { PAGES_ROUTES } from "./LinkingConfiguration";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator({
  navigation,
  route,
  initialRouteName
}) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  useEffect(() => {
    navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  }, []);

  return (
    <BottomTab.Navigator initialRouteName={initialRouteName}>
      <BottomTab.Screen
        name={PAGES_ROUTES.Home}
        component={HomeScreen}
        options={{
          title: "Get Started",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-code-working" />
          )
        }}
      />
      <BottomTab.Screen
        name={PAGES_ROUTES.Links}
        component={LinksScreen}
        options={{
          title: "Resources",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-book" />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? "";

  switch (routeName) {
    case "home":
      return "How to get started";
    case "links":
      return "Links to learn more";
  }
}
