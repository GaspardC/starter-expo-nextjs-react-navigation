import * as Linking from "expo-linking";

export const SCREEN_ROUTES = {
  Home: "home",
  Links: "links"
};
export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    initialRouteName: SCREEN_ROUTES.Home,
    screens: SCREEN_ROUTES
  }
};
