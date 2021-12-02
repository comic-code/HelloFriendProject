import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import BackgroundColor from 'react-native-background-color';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Menu from './pages/Menu';
import AbrirOlhos from './pages/AbrirOlhos';
import AchievementsPage from './pages/AchievementsPage';

const Stack = createStackNavigator();

export default function App() {
  
  useEffect(() => {setTimeout(() => { BackgroundColor.setColor("#141414") }, 500)}, [])

  return (<>
    <StatusBar animated backgroundColor="#141414" />
    <SafeAreaView style={{ flex: 1, backgroundColor: '#141414' }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Menu" headerMode="none">
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="AbrirOlhos" component={AbrirOlhos} />
          <Stack.Screen name="Achievements" component={AchievementsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  </>);
};
