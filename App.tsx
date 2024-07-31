import { createDrawerNavigator } from "@react-navigation/drawer";
import { LinkingOptions, NavigationContainer } from "@react-navigation/native";
import { createURL } from "expo-linking";

import Home from "home/home";
import CreatePost from "create-post/create-post";

const Drawer = createDrawerNavigator();

export default function App() {
  const linking: LinkingOptions<{}> = {
    prefixes: [
      createURL('/')
    ],
    config: {
      screens: {
        Home: {
          screens: {
            Feed: 'home/feed',
            Notifications: 'home/notifications'
          }
        },
        ['Create Post']: 'create-post',
      },
    }
  };

  return (
    <NavigationContainer linking={linking}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Create Post" component={CreatePost} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
