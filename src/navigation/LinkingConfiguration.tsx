import * as Linking from "expo-linking";

export const PAGES_ROUTES = {
  Root: "tab",
  Home: "home",
  Links: "links"
} as const;
export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    initialRouteName: PAGES_ROUTES.Root,
    screens: PAGES_ROUTES
  }
};
