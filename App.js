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
import BottomNavigation from './Screens/BottomNavigation';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'BottomNavigation'} screenOptions={{ headerShown: false }}>
          <Stack.Screen name={'Splash'} component={Splash} />
          <Stack.Screen name={'IntroScreen'} component={IntroScreen} />
          <Stack.Screen name={'SignIn'} component={SignIn} />
          <Stack.Screen name={'SignUp'} component={SignUp} />
          <Stack.Screen name={'Verification'} component={Verification} />
          <Stack.Screen name={'ResetPassword'} component={ResetPassword} />
          <Stack.Screen name={'Extra'} component={Extra} />
          <Stack.Screen name={'BottomNavigation'} component={BottomNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;