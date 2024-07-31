import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feed from './tabs/feed';
import Notifications from './tabs/notifications';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  );
}