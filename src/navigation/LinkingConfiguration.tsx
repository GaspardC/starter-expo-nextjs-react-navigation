import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/'), `${Linking.makeUrl('/Root/')}`],
  config: {
    // path: '',
    screens: {
      Home: 'home',
      Links: 'links',
    },
  },
};
