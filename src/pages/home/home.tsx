import { ComponentProps } from 'react';

import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FontAwesome from '@expo/vector-icons/FontAwesome';

import Feed from './tabs/feed';
import Notifications from './tabs/notifications';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Feed" options={getTabOptions('history')} component={Feed} />
      <Tab.Screen name="Notifications" options={getTabOptions('inbox')} component={Notifications} />
    </Tab.Navigator>
  );
}

function getTabOptions(iconName: ComponentProps<typeof FontAwesome>['name']): BottomTabNavigationOptions {
  return { tabBarIcon: ({color}) => <FontAwesome size={20} style={{ marginBottom: -3 }} name={iconName} color={color} /> };
}