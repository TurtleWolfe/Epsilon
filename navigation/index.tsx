/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
// import jwtDecode from 'jwt-decode';
import navigationTheme from './navigationTheme';
import AppLoading from 'expo-app-loading';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
// import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import AppNavigator from './AppNavigator';
import OfflineNotice from '../components/OfflineNotice';
import AuthNavigator from './AuthNavigator';
import AuthContext from '../auth/context';
import authStorage from '../auth/storage';
import navigation from './rootNavigation';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <>
      {/* <OfflineNotice /> */}
      <NavigationContainer
        linking={LinkingConfiguration}
        // theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        theme={navigationTheme}
      >
        <RootNavigator />
      </NavigationContainer>
    </>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();
function RootNavigator() {
  const [user, setUser] = React.useState(false);
  const [isReady, setIsReady] = React.useState(false);


  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user); //  if no user TOKEN return immediately
    // setUser(jwtDecode(user));  // ELSE decode and set as User
  }

  // React.useEffect(() => {
  //   restoreToken()
  // }, []);
  if (!isReady)
    return <AppLoading
      startAsync={restoreUser}
      onFinish={() => setIsReady(true)}
      onError={console.log('error')}
    />
  // const navigationRef = React.createRef();
  // const navigation = navigationRef.current;
  // navigation.navigate()
  return (
    <AuthContext.Provider
      value={{ user, setUser }}
    >
      <OfflineNotice />
      <Stack.Navigator
        ref={navigation}
        // Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
        screenOptions={{ headerShown: false }}
      >
        {/* <Stack.Screen
          name="Root"
          component={BottomTabNavigator}
        /> */}
        {user ?  // IF USER 
          <Stack.Screen
            name="Root"
            component={AppNavigator}
          />
          :  // ELSE
          <Stack.Screen
            name="Root"
            component={AuthNavigator}
          />
        }
        <Stack.Screen
          name="NotFound"
          component={NotFoundScreen}
          options={{ title: 'Oops!' }}
        />
      </Stack.Navigator>
    </AuthContext.Provider>
  );
}
