import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import BackgroundColor from 'react-native-background-color';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Menu from './pages/Menu';
import AbrirOlhos from './pages/AbrirOlhos';

const Stack = createStackNavigator();

export default function App() {
  
  useEffect(() => {setTimeout(() => { BackgroundColor.setColor("#202020") }, 500)}, [])

  return (<>
    <StatusBar animated backgroundColor="#202020"/>
    <SafeAreaView style={{ flex: 1, backgroundColor: '#202020' }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Menu" headerMode="none">
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="AbrirOlhos" component={AbrirOlhos} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  </>);
};
