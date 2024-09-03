import { Image, StyleSheet, View, Text } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { Link, LinkingOptions, NavigationContainer } from "@react-navigation/native";

import { createURL } from "expo-linking";

import FontAwesome from '@expo/vector-icons/FontAwesome';

import Home from "home/home";
import CreatePost from "create-post/create-post";

const Drawer = createDrawerNavigator();

export function App() {
  return (
    <View style={styles.root}>
      <TopBar />
      <MainContent />
    </View>
  );
}

export default function MainContent() {
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
      <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerRight: () => (
              <Link style={{ marginRight: 15 }} to={{ screen: 'Create Post' }} accessibilityLabel="Create Post">
                <FontAwesome
                    name="plus"
                    size={25}/>
              </Link>
            ),
          }}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Create Post" component={CreatePost} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

        
function TopBar() {
  return (
    <View style={styles.topBar}>
      <Image source={require("assets/images/logo.png")} style={styles.logo}></Image>
      <Text style={styles.titleText}>Kudos League</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  logo: {
    height: 50,
    width: 50,
    marginTop: 4,
  },
  topBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    marginLeft: 10,
    fontSize: 28,
  },
});