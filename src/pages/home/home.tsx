import { ComponentProps } from 'react';

import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FontAwesome from '@expo/vector-icons/FontAwesome';

import Feed from './tabs/feed';
import Notifications from './tabs/notifications';
import Profile from './tabs/profile';
import Settings from './tabs/settings';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Feed" options={getTabOptions('history')} component={Feed} />
      <Tab.Screen name="Notifications" options={getTabOptions('inbox')} component={Notifications} />
      <Tab.Screen name="Profile" options={getTabOptions('user-circle')} component={Profile} />
      <Tab.Screen name="Settings" options={getTabOptions('gear')} component={Settings} />
    </Tab.Navigator>
  );
}

function getTabOptions(iconName: ComponentProps<typeof FontAwesome>['name']): BottomTabNavigationOptions {
  return { tabBarIcon: ({color}) => <FontAwesome size={20} style={{ marginBottom: -3 }} name={iconName} color={color} /> };
}