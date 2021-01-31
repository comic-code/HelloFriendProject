import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Menu from './pages/Menu';
import AbrirOlhos from './pages/AbrirOlhos';

const Stack = createStackNavigator();

export default function App() {
  return (<>
    <StatusBar barStyle="light-content" backgroundColor="#404040" />
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Menu" headerMode="none">
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="AbrirOlhos" component={AbrirOlhos} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  </>);
};
