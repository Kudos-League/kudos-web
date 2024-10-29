import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './home';
import User from './entities/user';

const Stack = createNativeStackNavigator();

export default function Search() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
}