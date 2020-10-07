import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { theme } from '../config/theme/theme';


export default function TabBarIcon(props) {
  return (
    <Ionicons
      name={props.name}
      size={30}
      style={{ marginBottom: -3 }}
      color={props.focused ? theme.colors.orange400 : theme.colors.black200}
    />
  );
}
