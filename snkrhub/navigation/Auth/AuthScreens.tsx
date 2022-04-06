/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

import LoginScreen from '../../screens/LoginScreen';
import { RootTabParamList, RootTabScreenProps } from '../../types';

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const Stack = createStackNavigator<RootTabParamList>();

function AuthScreens() {
  const colorScheme = useColorScheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
}

export default AuthScreens