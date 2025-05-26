import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from '@navigation/HomeNavigator';
import AuthNavigator from '@navigation/AuthNavigator';
import { StatusBar } from 'expo-status-bar';


export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <NavigationContainer>
      <StatusBar style="light"/>
      {isAuthenticated ? (
        <HomeNavigator />
      ) : (
        <AuthNavigator setIsAuthenticated={setIsAuthenticated} />
      )}
    </NavigationContainer>
  );
}
