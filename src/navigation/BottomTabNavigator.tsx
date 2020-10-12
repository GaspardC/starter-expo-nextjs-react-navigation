import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect } from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../pages/nav/home';
import LinksScreen from '../pages/nav/links';
import { ROUTES } from './routes';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'home';



export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  useEffect(() => {
    navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  }, [])

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name={ROUTES.home}
        component={HomeScreen}
        options={{
          title: 'Get Started',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='md-code-working' />
          ),
        }}
      />
      <BottomTab.Screen
        name={ROUTES.links}
        component={LinksScreen}
        options={{
          title: 'Resources',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='md-book' />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'home':
      return 'How to get started';
    case 'links':
      return 'Links to learn more';
  }
}
