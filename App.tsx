import { useState } from "react";
import { Image, StyleSheet, View, Text } from "react-native";

import { Button } from "react-native-paper";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { Link, LinkingOptions, NavigationContainer } from "@react-navigation/native";

import { createURL } from "expo-linking";

import FontAwesome from '@expo/vector-icons/FontAwesome';

import Home from "pages/home/home";
import CreatePost from "pages/create-post/create-post";
import Donate from "pages/donate/donate";
import { TokenContext } from "shared/contexts";
import { login } from "shared/api/actions";

const Drawer = createDrawerNavigator();

function SharedLayout({ children }) {
  const [token, setToken] = useState<string|null>(null);

  async function onLogin() {
    const loginResponse = await login({
      email: 'fake.address@gmail.com',
      password: 'fake password',
    });
    setToken(loginResponse.token);
  }

  return (
    <View style={styles.root}>
      <View style={styles.mainContent}>
        <TokenContext.Provider value={token}>
          {children}
        </TokenContext.Provider>
      </View>
      <Button onPress={onLogin}>Login</Button>
    </View>
  );
};

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
            Notifications: 'home/notifications',
            Profile: 'home/profile',
            Settings: 'home/settings',
          }
        },
        ['Create Post']: 'create-post',
        Donate: 'donate',
      },
    }
  };

  return (
    <NavigationContainer linking={linking}>
      <SharedLayout>
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
          <Drawer.Screen name="Donate" component={Donate} />
        </Drawer.Navigator>
      </SharedLayout>
    </NavigationContainer>
  );
}

        
function TopBar() {
  return (
    <View style={styles.topBar}>
      <Image source={require("shared/assets/images/logo.png")} style={styles.logo}></Image>
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
  container: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
  },
  sharedContent: {
    height: 50,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});