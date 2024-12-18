import { Image, StyleSheet, View, Text } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { Link, LinkingOptions, NavigationContainer } from "@react-navigation/native";

import { createURL } from "expo-linking";

import FontAwesome from '@expo/vector-icons/FontAwesome';

import Home from "pages/home/home";
import CreatePost from "pages/create-post/create-post";
import Donate from "pages/donate/donate";
import Login from "pages/login/login";
import Search from "pages/search/search";

import {store} from "redux_store/store";
import useAuth from "shared/hooks/use-auth";

import { Provider } from 'react-redux';
import { useAppSelector } from "redux_store/hooks";
import { isValidAuthState } from "redux_store/slices/auth-slice";

import { TailwindProvider, useTailwind } from 'tailwind-rn';
import utilities from './tailwind.json';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <Provider store={store}>
        <AppImpl />
      </Provider>
    </TailwindProvider>
  )
}

function AppImpl() {
  useAuth();
  const authState = useAppSelector(state => state.auth);
  const tailwind = useTailwind();

  return (
    <NavigationContainer linking={getLinkingOptions()}>
      <View style={styles.root}>
        <View style={tailwind('flex-1')}>
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
            <Drawer.Screen name="Search" component={Search} />
            {isValidAuthState(authState) ? <Drawer.Screen name="Switch Account" component={Login} /> : <Drawer.Screen name="Login" component={Login} />}
          </Drawer.Navigator>
        </View>
      </View>
    </NavigationContainer>
  );
}

function getLinkingOptions(): LinkingOptions<{}> {
  return {
    prefixes: [
      createURL('/')
    ],
    config: {
      screens: {
        Home: {
          screens: {
            Feed: 'home/feed',
            Notifications: 'home/notifications',
            ['My Profile']: 'home/my-profile',
            Settings: 'home/settings',
          }
        },
        ['Create Post']: 'create-post',
        Donate: 'donate',
        // TODO: Change the name to "Switch Accounts" if there is already a token
        Login: {
          screens: {
            ['Sign In']: '/login/sign-in',
            ['Sign Up']: '/login/sign-up',
          }
        },
        Search: {
          screens: {
            Home: '/search',
            User: '/user/:username',
            Post: '/post/:id',
          }
        },
      },
    }
  };
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