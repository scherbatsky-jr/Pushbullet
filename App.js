/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import LoginView from './views/LoginView';
import Inbox from './views/Inbox/Inbox';

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginView} />
        <Stack.Screen name="Inbox" component={Inbox} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
