import { ComponentProps } from 'react';

import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FontAwesome from '@expo/vector-icons/FontAwesome';

import SignIn from './tabs/sign-in';
import SignUp from './tabs/sign-up';

const Tab = createBottomTabNavigator();

export default function Login() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Sign In" options={getTabOptions('sign-in')} component={SignIn} />
      <Tab.Screen name="Sign Up" options={getTabOptions('user')} component={SignUp} />
    </Tab.Navigator>
  );
}

function getTabOptions(iconName: ComponentProps<typeof FontAwesome>['name']): BottomTabNavigationOptions {
  return { tabBarIcon: ({color}) => <FontAwesome size={20} style={{ marginBottom: -3 }} name={iconName} color={color} /> };
}