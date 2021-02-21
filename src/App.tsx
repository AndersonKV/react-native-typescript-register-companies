import React from 'react';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

declare const global: {HermesInternal: null | {}};

const Stack = createStackNavigator();

import Home from './pages/Home';
import ListCompanie from './pages/ListCompanie';
import RegisterCompanie from './pages/RegisterCompanie';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'red',
  },
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Home} />
        <Stack.Screen name="Listar empresas" component={ListCompanie} />
        <Stack.Screen name="Cadastrar empresas" component={RegisterCompanie} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// options={{
//   headerTransparent: true,
// }}
export default App;
