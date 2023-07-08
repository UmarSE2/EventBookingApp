import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from './Screens/Splash';
import IntroScreen from './Screens/IntroScreen';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import Verification from './Screens/Verification';
import ResetPassword from './Screens/ResetPassword';
import Extra from './Screens/Extra';
import Explore from './Screens/Explore';
import Events from './Screens/Events';
import Map from './Screens/Map';
import Profile from './Screens/Profile';
import MyDrawer from './Components/MyDrawer';
import Eventdetails from './Components/EventDetails';
import FilterSheet from './Components/FilterSheet';
import Search from './Screens/Search';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Explore'} screenOptions={{ headerShown: false }}>
          <Stack.Screen name={'Splash'} component={Splash} />
          <Stack.Screen name={'IntroScreen'} component={IntroScreen} />
          <Stack.Screen name={'SignIn'} component={SignIn} />
          <Stack.Screen name={'SignUp'} component={SignUp} />
          <Stack.Screen name={'Verification'} component={Verification} />
          <Stack.Screen name={'ResetPassword'} component={ResetPassword} />
          <Stack.Screen name={'Extra'} component={Extra} />
          <Stack.Screen name={'Explore'} component={Explore} />
          <Stack.Screen name={'Events'} component={Events} />
          <Stack.Screen name={'Map'} component={Map} />
          <Stack.Screen name={'Profile'} component={Profile} />
          <Stack.Screen name={'MyDrawer'} component={MyDrawer} />
          <Stack.Screen name={'Eventdetails'} component={Eventdetails} />
          <Stack.Screen name={'FilterSheet'} component={FilterSheet} />
          <Stack.Screen name={'Search'} component={Search} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;