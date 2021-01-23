import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Menu from './src/Menu';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <SafeAreaView style={{ flex: 1 }}>
        <Menu />
      </SafeAreaView>
    </>
  );
};
